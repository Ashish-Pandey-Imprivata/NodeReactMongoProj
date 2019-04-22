const express = require ('express');
const mongoose = require ('mongoose');
const cookieSession = require ('cookie-session');
const passport = require ('passport');
const app = express();
require ('./models/Users');
const keys = require ('./config/keys');
require ('./services/passport');

app.use (
  cookieSession ({
    maxAge: 30*60*60*1000,
    keys: [keys.cookieKey]
  })
)

app.use (passport.initialize());
app.use (passport.session());

mongoose.connect (keys.mongoURI, {useNewUrlParser: true})
  .then(status => {
    console.log ('Connected to MongoDB!!');
  })
  .catch(err => {
    console.log(err);
   });

require ('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
