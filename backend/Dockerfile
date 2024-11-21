# Use a Node.js base image
FROM node:18

# Define ARGs
ARG DATABASE_HOST
ARG DATABASE_PORT
ARG DATABASE_NAME
ARG DATABASE_USER
ARG DATABASE_PASSWORD
ARG JWT_SECRET
# ARG DB_TYPE

# Use ARGs in ENV
ENV DATABASE_HOST=${DATABASE_HOST}
ENV DATABASE_PORT=${DATABASE_PORT}
ENV DATABASE_NAME=${DATABASE_NAME}
ENV DATABASE_USER=${DATABASE_USER}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ENV JWT_SECRET=${JWT_SECRET}
# ENV DB_TYPE=${DB_TYPE}

# Set the working directory
WORKDIR /
 
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