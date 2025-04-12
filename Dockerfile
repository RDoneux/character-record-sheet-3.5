# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install production dependencies only
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the build files
FROM node:18-slim

# Install a lightweight static file server
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /app

# Copy only the build files from the builder stage
COPY --from=builder /app/dist/character-record-sheet-3.5/browser ./build

# Expose the port the app runs on
EXPOSE 3000

# Serve the build files
CMD ["serve", "-s", "build", "-l", "3000"]
