FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app into the container
COPY . .

# Use environment variables during runtime
ENV MOCK_XERO_URL=${MOCK_XERO_URL}
ENV REDIS_PORT=${REDIS_PORT}
ENV CACHE_KEY=${CACHE_KEY}
ENV CACHE_EXPIRATION_TIME=${CACHE_EXPIRATION_TIME}

#Ideally run tests automatically during a CI/CD process by integrating 
#with tools like GitHub Actions, CircleCI, or Jenkins.
#As of now in the iterest of time I've integrated here itself.
CMD ["sh", "-c", "npm run test && npm start"]
