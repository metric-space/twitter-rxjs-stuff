## Twitter API + Rxjs

Simple local search bar for tweets

mashed the [second example](https://baconjs.github.io/index.html) from the Bacon.js in rxjsand the twitter-node-api
example from https://github.com/chrisharrington/node-twitter-sign-in-example


### Steps to get it working
- Make an account on twitter if you don't have one.
- Get a consumer key and secret and your own access tokens  from the dev site of twiter
- Fill those in the lib/secrets.json
- Generate a self-signed certificate by following the steps on this [gentleman's blog](http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/) 
- remember to remove the password from .pem file
- Make sure these (*.pem) are in the root directory of the project

###  Things to do
- rxjs in the backend
- Error in stream and error handling
- Redirect and oauth
- Prettier UI please ... this is long overdue

### License MIT
