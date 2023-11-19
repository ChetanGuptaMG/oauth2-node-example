const fs = require('fs');
const https = require('https');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');

require('dotenv').config();

const port = process.env.PORT || 3000;
const config = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    cookie_key1: process.env.cookie_key1,
    cookie_key2: process.env.cookie_key2,
};

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.client_id,  // Fix the typo here
    clientSecret: config.client_secret,  // Fix the typo here
};

const verifyCallback = (accessToken, refreshToken, profile, done) => {
    console.log('profile', profile);
    return done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

const app = express();

app.use(helmet());

app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.cookie_key1, config.cookie_key2],
}));

app.use((req, res, next) => {
    // Stub out missing regenerate and save functions.
    // These don't make sense for client side sessions.
    if (req.session && !req.session.regenerate) {
      req.session.regenerate = (cb) => {
        cb();
      };
    }
    if (req.session && !req.session.save) {
      req.session.save = (cb) => {
        cb();
      };
    }
    next();
  });

app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req, res, next){
    console.log('user id', req.user);
    const loggedIn = req.isAuthenticated() && req.user;
    if(!loggedIn){
        return res.status(401).json({error:"you must logged in",})
    }
    next();
}

app.get('/auth/google', 
    passport.authenticate('google', { 
        scope: ['profile', 'email'],
     }));

app.get('/auth/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: '/auth/google',
        successRedirect: '/',
        session: true,
     }),
    (req, res) => {
        console.log('google called back');
    }
);

app.get('/auth/logout', (req, res) => {
    req.logout(() => {
        return res.redirect('/');
    });
});

app.get('/secret',checkLoggedIn, (req, res) => {
    return res.send('Hello secret star');
});

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const options = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
    passphrase: 'chetan2001',
};

https.createServer(options, app).listen(port, () => {
    console.log('Server is running on port', port);
});
