# Squidviewer

[![code style: prettier](https://img.shields.io/badge/style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Project is bootstrapped with two separate directories:
* The client expo facing app bootstrapped from given code
* An express server enabling communication to the provided API endpoint (bootstrapped from [express generator](https://expressjs.com/en/starter/generator.html))

## Initial Setup

### Client

IMPORTANT NOTES:
- You will need to update your own IP address in App.js fetchSquidData() function in order to communicate between app & express server.
- When running on windows the following was required to bypass a cli error: `set NODE_OPTIONS=--openssl-legacy-provider`

Terminal 1:
```
cd client
npm install
npm run start
```

Can verify by running app via Metro.

### Server
Terminal 2:
```
cd server
npm install
npm run start
```

Can verify by going to localhost:3000/users/ to get a response.

## Environmental Variables
Due to potential sensitivity of data the api endpoint will be obfuscated through use of dotenv library. Similarly the initial codebase README will also remain hidden (added to .gitignore to hide)

### Additional Scripts
* There is an additional script setup in client/package.json named `pretify` running this with the command `npm run pretify` should auto format code to be clean.

These can be tied in at a later date with pre-commit hook or similar.
