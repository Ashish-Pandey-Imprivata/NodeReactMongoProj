const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require ('mongoose');
const keys = require ('../config/keys');

const Users = mongoose.model ('users');

passport.serializeUser ((user, done) => {
  done (null,user.id);
});

passport.deserializeUser ((id, done) => {
  Users.findById (id).then ( (user) => {
    done (null, user);
  });
});

passport.use (
  new GoogleStrategy (
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log (accessToken);
      // console.log (refreshToken);
      //console.log (profile);
      Users.findOne ({googleId: profile.id}).then ((user) => {
        if (user) {
          console.log ('welcome back :-) ' + profile.displayName);
          done (null,user);
        }
        else {
          new Users({
              googleId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value
            })
            .save()
            .then (user => done (null,user))
            .else ((err) => {
              done (err, null);
            });

            console.log ('User saved: ' + profile.displayName);
        }
    })
  }
));
