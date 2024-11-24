# Stage 1: Build the Angular app
FROM node:16 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the app using Nginx
FROM nginx:1.21.6-alpine AS production-stage

# Copy the Angular build output to the Nginx web directory
COPY --from=build-stage /app/dist/social-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
