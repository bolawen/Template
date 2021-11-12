const envMode = process.env.envMode;
require('dotenv').config({ path: `.env.${envMode}` });
const prefixRE = /^VUE_APP_/;
let env = {};
for (const key in process.env) {
    if (key == 'NODE_ENV' || key == 'BASE_URL' || key == 'REQUEST_URL' || prefixRE.test(key)) {
        env[key] = JSON.stringify(process.env[key]);
    }
}

module.exports = env;
