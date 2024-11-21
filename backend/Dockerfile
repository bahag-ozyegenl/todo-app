# Use a Node.js base image
FROM node:18

# Define ARGs
ARG DB_HOST
ARG DB_PORT
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD
ARG JWT_SECRET
# ARG DB_TYPE

# Use ARGs in ENV
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_DATABASE=${DB_DATABASE}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV JWT_SECRET=${JWT_SECRET}
# ENV DB_TYPE=${DB_TYPE}

# Set the working directory
WORKDIR /app
 
# Copy package files
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
RUN npm install -g typescript
 
# Copy the source code
COPY . .
 
# Rebuild bcrypt for the correct architecture
RUN npm rebuild bcrypt --build-from-source
 
# Build TypeScript code
RUN npm run build
 
# Expose the port (if needed)
EXPOSE 8080
 
# Use environment variable for the port
ENV PORT=8080
 
# Start the application
CMD ["npm", "start"]