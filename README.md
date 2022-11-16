# Squidviewer

Project is bootstrapped with two separate directories:
* The client expo facing app bootstrapped from given code
* An express server enabling communication to the provided API endpoint (bootstrapped from [express generator](https://expressjs.com/en/starter/generator.html))

### WIP CHECKLIST STATUS
(currently mocking simple components to display all data before tieing all together -> Pocket/Scheme data mostly done (need to modify for social media links), next up vouchers and tidying existing components)

- [x] Initalise git & commit changes
- [x] Query data from endpoint
- [x] Display all items in list (JSON.strinigfy them all successfully, tidying into sub-components atm)
- [ ] When user clicks item, opens new screen displaying additional info (requires formatting/hiding data until selected)
- [ ] Create filter lets user order by amount of vouchers (basic filter option, sort data response)
- [ ] Tidy styling/codebase

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

Can verify by going to localhost:3000/users/ to get a response.

## Environmental Variables
Not featured on initial commit but due to potential sensitivity of data the api endpoint will be obfuscated through use of dotenv library. Similarly the initial codebase README will also remian hidden (added to .gitignore to hide)

### Pretify Script
Currently there is an additional script setup in client/package.json named `pretify` running this with the command `npm run pretify` should auto format code to be clean.

This can be tied in at a later date with pre-commit hook or similar.
