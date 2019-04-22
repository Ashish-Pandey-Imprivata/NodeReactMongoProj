// prod.js -- production keys here...

// do NOT commit!!!

module.exports = {
   googleClientID: process.env.GOOGLE_CLIENT_ID,
   googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
   mongoURI: process.env.MONGO_URI,
   cookieKey: process.env.COOKIE_KEY
}


//{"web":{"client_id":"1066716046719-9b3acbsqla0r29d15tuev33f87df091r.apps.googleusercontent.com","project_id":"pashoauth","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"SEf4KfaWogksHr0LznAuQ63S","redirect_uris":["http://localhost:5000/auth/google/callback"],"javascript_origins":["http://localhost:5000"]}}
