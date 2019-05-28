# Build Simple Website with NodeJS, Express & EJS view engine

## Document
* Node Version: v10.15.3 NPM Version: 6.9.0
* Install dependencies using [npm](https://www.npmjs.com/) javascript package manager: ``` npm install ```
* Start node server with [nodemon](https://nodemon.io/): ``` nodemon start ```
* Tune to url: ``` http://localhost:3000 ```
* run the server in testing mode `NODE_ENV=testing nodemon`

All boilerplate code managed by [express generator](https://expressjs.com/en/starter/generator.html) framework adhering to DRY rule. Routes are defined in routes/index.js file, static view pages are in views folder. I have implemented partials concept to avoid code redundancy in html using EJS view engine. Css and Javascript files are stored in public folder


*  Versioning when hosted in distributed deployment */
What if you have distributed deployment?

If you planning to deploy your app on AWS Elastic Beanstalk having auto scale (more than one app server), than above shall not work efficiently as each client browser may hit to new app server seeing a different time-stamp!
Let’s solve this by clustering all app starts in a 5 min span.

app.locals.deployVersion = 
           Math.ceil((new Date).getTime()/300000)*300000;