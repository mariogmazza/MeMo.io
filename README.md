
## ReactJS Based Simon Game App

## About This Site 

Technologies used Node/Express/React/PassportJS/MongoDB/Mongoose and some other NPM packages.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

### The Idea behind it
Build a website that brings in people for the classic game of "Simon", 
if user registers the scores will be saved to allow the user to measure his/her 
performance. When a register user logs in more "memory" games will be available to them.


## LIVE DEMO

### This gif shows the view from a non register user
![non user](https://github.com/mariogmazza/SimonApp/blob/master/Simon_nonUser.gif)

### This gif  shows the view from a register user
![register user](https://github.com/mariogmazza/SimonApp/blob/master/Simon_user.gif)



## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
git clone
cd in
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.



