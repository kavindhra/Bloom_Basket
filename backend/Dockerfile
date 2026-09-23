FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package manifests first to leverage Docker layer caching
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application source
COPY . .

# Set environment for production
ENV NODE_ENV=production

# Expose the backend port (read from server.js / .env)
EXPOSE 5000

# Start the application using the existing npm script
CMD ["npm", "start"]
