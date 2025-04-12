import { AzureBlobFolder } from '@pulumi/synced-folder';
import * as resources from '@pulumi/azure-native/resources';
import * as storage from '@pulumi/azure-native/storage';
import * as cdn from '@pulumi/azure-native/cdn';
import * as network from '@pulumi/azure-native/network';
import { Config, interpolate } from '@pulumi/pulumi';
import { join } from 'path';

const distPath = join(__dirname, '../dist/character-record-sheet-3.5/browser');

const azureConfig = new Config('azure');
const config = new Config();

const prefix = config.require('prefix');
const location = azureConfig.require('location');

// https://www.pulumi.com/registry/packages/azure-native/api-docs/resources/resourcegroup/
const resourceGroup = new resources.ResourceGroup(`${prefix}-resource-group`, {
  location,
});

// https://www.pulumi.com/registry/packages/azure-native/api-docs/storage/storageaccount/
const storageAccount = new storage.StorageAccount(`${prefix}storage`, {
  resourceGroupName: resourceGroup.name,
  location: resourceGroup.location,
  sku: {
    name: storage.SkuName.Standard_LRS,
  },
  kind: storage.Kind.StorageV2,
});

// https://www.pulumi.com/registry/packages/azure-native/api-docs/storage/storageaccountstaticwebsite/
new storage.StorageAccountStaticWebsite(`${prefix}-static-website`, {
  accountName: storageAccount.name,
  resourceGroupName: resourceGroup.name,
  indexDocument: 'index.html',
  error404Document: 'index.html',
});

// https://www.pulumi.com/registry/packages/synced-folder/api-docs/blobfolder/
new AzureBlobFolder(`${prefix}-dist-files`, {
  path: distPath,
  resourceGroupName: resourceGroup.name,
  storageAccountName: storageAccount.name,
  containerName: '$web', // default container created by StorageAccountStaticWebsite
});

// --- CDN --- //

const storageEndpoint = interpolate`${storageAccount.name}.z33.web.core.windows.net`;

// https://www.pulumi.com/registry/packages/azure-native/api-docs/cdn/profile/
const cdnProfile = new cdn.Profile(`${prefix}-cdn`, {
  resourceGroupName: resourceGroup.name,
  location: 'global',
  sku: {
    name: cdn.SkuName.Standard_Microsoft,
  },
});

// https://www.pulumi.com/registry/packages/azure-native/api-docs/cdn/endpoint/
const cdnEndpoint = new cdn.Endpoint(`${prefix}-endpoint`, {
//   endpointName: fqdn,
  resourceGroupName: resourceGroup.name,
  location: 'global',
  profileName: cdnProfile.name,
  isHttpAllowed: false,
  isHttpsAllowed: true,
  originHostHeader: storageEndpoint,
  origins: [
    {
      name: `${prefix}-blob-storage`,
      hostName: storageEndpoint,
    },
  ],
});

// --- DNS --- //

// Define the DNS zone name (e.g., "example.com") and subdomain (e.g., "cdn").
const dnsZoneName = config.require('dnsZoneName'); // e.g., "example.com"
const subdomain = config.require('subdomain'); // e.g., "cdn"

// Fetch the existing DNS zone to ensure it is referenced correctly.
const dnsZone = network.getZoneOutput({
  resourceGroupName: 'NetworkWatcherRG', // Update if the DNS zone is in a different resource group.
  zoneName: dnsZoneName,
});

// Create a CNAME record in the DNS zone pointing to the CDN endpoint.
new network.RecordSet(`${prefix}-cdn-subdomain`, {
  resourceGroupName: 'NetworkWatcherRG',
  zoneName: dnsZone.name,
  relativeRecordSetName: subdomain, // e.g., "cdn"
  recordType: "CNAME",
  ttl: 300, // Time-to-live in seconds
  cnameRecord: {
    cname: cdnEndpoint.hostName, // Points to the CDN endpoint
  },
});

export const fqdnOutput = cdnEndpoint.hostName;