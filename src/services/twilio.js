const Twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

const generateTurnServerConfig = async () => {
  try {
    const turnServer = await client.accounts(accountSid)
      .sip
      .sipDomains('default')
      .fetch();

    const turnConfig = {
      username: turnServer.auth.username,
      credential: turnServer.auth.password,
      uri: `turn:${turnServer.uri}?transport=tcp`,
    };

    return turnConfig;
  } catch (error) {
    console.error('Error generating TURN server config:', error);
    throw error;
  }
};

const turnServerConfig = async () => {
  return generateTurnServerConfig();
};

module.exports = { turnServerConfig, generateTurnServerConfig };