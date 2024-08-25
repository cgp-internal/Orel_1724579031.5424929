#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

# Initialize project
npm init -y

# Install required dependencies
npm install react react-dom twilio @types/twilio

# Run the application
npm start