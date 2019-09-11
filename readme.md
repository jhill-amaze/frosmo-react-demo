# Frosmo React Demo

## Setup

NOTE: you will need to set up a contentful instance populated with example content in the correct format and link it to the app in `./api.js`.

1. Set up an IIS (or equivalent) site with the desired URL, for example `frosmo-demo.local`. This is needed to target Frosmo at the URL.
2. Run `npm i` in root directory to install node_modules.
3. Run `npm run dev` to build and serve the site locally. You must have the HTTP service stopped before this will work.

## Windows install notes

To run the site locally on Windows you must do the following:

- Add entry to hosts file: `127.0.0.1 		frosmo-demo.local`
- Stop http process to free up port 80 by running the following in a command prompt with admin privileges `net stop http` and answer "yes" (you can also find the service named `W3SVC` in the Services tab of the task manager and stop it from there).
