React Video Chat App
=====================

Getting Started
---------------

### Prerequisites

* Node.js installed on your system

### Installation

1. Clone the repository: `git clone https://github.com/your-username/React-Video-Chat-App.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

### Running the Application

* Run `npm start` to start the development server
* Open `http://localhost:3000` in your web browser to access the application

### Available Scripts

* `npm start`: Starts the development server
* `npm run build`: Builds the application for production

### Project Structure

* `public/`: Public files for the application
* `src/`: Source code for the application
	+ `components/`: React components
	+ `containers/`: Higher-order React components
	+ `services/`: Service classes for authentication, Twilio, and room management
	+ `webrtc/`: WebRTC peer connection service
	+ `api/`: API endpoints for room management
	+ `models/`: Database models
* `package.json`: Project metadata and dependencies
* `README.md`: This file
* `run.sh`: Bash run script for installing Node and dependencies
* `.gitignore`: Git ignore file for node-modules and cache files
* `db.sqlite`: SQLite database for storing video chat room data