# Squidviewer

Project is bootstrapped with two separate directories:
* The client expo facing app bootstrapped from given code
* An express server enabling communication to the provided API endpoint (bootstrapped from [express generator](https://expressjs.com/en/starter/generator.html))

## Initial Setup

### Client
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

Can verify by going to localhost3000/users/ to get a response.

## Environmental Variables
Not featured on initial commit but due to potential sensitivity of data the api endpoint will be obfuscated through use of dotenv library. Similarly the initial codebase README will also remian hidden (added to .gitignore to hide)
