const OAuth = require('oauth');
const config = require('../config');

const OAuth2 = OAuth.OAuth2;

var oauth2 = new OAuth2(
    config.v2.env.app.clientId,
    config.v2.env.app.clientSecret,
    null,
    config.v2.env.auth.sandbox,
    config.v2.env.token.sandbox,
    {
        'Authorization': 'Basic ' + new Buffer(config.v2.env.app.clientId + ':' + config.v2.env.app.clientSecret).toString('base64')
    }
);

exports.getToken = function () {
    oauth2.getOAuthAccessToken(
        '', {
            'grant_type': 'client_credentials'
        },
        function (e, access_token, refresh_token, results) {
            console.log('bearer: ', access_token);
        });
}