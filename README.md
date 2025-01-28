# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The provided `server.js` file contains a simple HTTP server that, under certain conditions (e.g., a request that causes an error), will throw an unhandled promise rejection and crash.  The `serverSolution.js` file shows how to correctly handle such rejections to prevent crashes.

## Running the Code

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node server.js` to start the server (you'll likely see it crash).
4.  Run `node serverSolution.js` to see the corrected version.