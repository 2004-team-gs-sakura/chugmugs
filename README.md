# ChugMugs

An E-commerce website for browsing and carting mugs, developed by Fullstack Academy senior students:
Barish Poole, Vasyl Semak, Ian Gelfand, Angel Concepcion

Production Link: https://chugmugs.herokuapp.com/

Frontend - React + Redux

Backend - Node.js, Express, Sequelize, PostgreSQL

Style - Bootstrap

Deployment - Heroku continuous deployment with Travis CI

## Local Setup

```
git clone https://github.com/2004-team-gs-sakura/chugmugs.git
```
```
npm install
```

Create PostgreSQL database:
```
createdb graceshopper
```

Start developer environment with local server and webpack:
```
npm run start-dev
```

Seed database with default mugs, users, and user carts
```
npm run seed
```

Visit http://localhost:8080 to start shopping on a local server.

If you want to run the server and/or webpack separately, you can also npm run start-server and npm run build-client.

## Customize

* Create a file called secrets.js in the project root
* This file is listed in .gitignore, and will only be required in your development environment
* Its purpose is to attach the secret environment variables that you will use while developing
* It's very important that you not push it to Github! This information is private! Someone else may use your API keys.
* Example of secrets.js file:

process.env.GOOGLE_CLIENT_ID = 'Your Google Client ID here'
process.env.GOOGLE_CLIENT_SECRET = 'Your Google Client Secret here'
process.env.GOOGLE_CALLBACK = '/auth/google/callback'

# OAuth

To use OAuth with Google, refactor the customized information with your own Google Client information. You may find them from Google API dashboard.

# Authors

* Barish Poole
* Angel Concepcion
* Ian Gelfand
* Vasyl Semak
