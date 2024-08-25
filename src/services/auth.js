import { Meteor } from 'meteor/meteor';

const OAuth = Meteor.npmRequire('oauth').OAuth2;

const authenticateWithGmail = (code, callback) => {
  const oauth2 = new OAuth(
    'YOUR_CLIENT_ID',
    'YOUR_CLIENT_SECRET',
    'https://accounts.google.com/o/oauth2/token',
    'https://accounts.google.com/o/oauth2/auth',
    'profile email'
  );

  oauth2換 autorize({
    code: code,
    redirect_url: 'http://localhost:3000/auth/callback',
    grant_type: 'authorization_code'
  }, (err, token) => {
    if (err) {
      callback(err);
    } else {
      oauth2.get('https://openidconnect.googleapis.com/v1/userinfo', token, (err, userinfo) => {
        if (err) {
          callback(err);
        } else {
          callback(null, userinfo);
        }
      });
    }
  });
};

export { authenticateWithGmail };