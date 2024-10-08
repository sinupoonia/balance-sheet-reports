FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app into the container
COPY . .

# Set the environment variable before building the app
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=http://localhost:3007/


# Build the React app
RUN npm run build

#Ideally run tests automatically during a CI/CD process by integrating 
#with tools like GitHub Actions, CircleCI, or Jenkins.
#As of now in the iterest of time I've integrated here itself.
RUN npm run test

# Use an Nginx image to serve the build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
