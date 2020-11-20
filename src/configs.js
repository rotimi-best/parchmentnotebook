const {
  REACT_APP_STAGE = 'production',
  REACT_APP_FB_APP_ID = '',
  REACT_APP_SUPPORT_EMAIL = '',
  // REACT_APP_API_URL = '',
  REACT_APP_FIREBASE_AUTH_DOMAIN = '',
  REACT_APP_FIREBASE_API_KEY = '',
  REACT_APP_PUBLIC_PUSH_KEY,
  REACT_APP_SENTRY_DNS
} = process.env;

export default {
  FB_APP_ID: REACT_APP_FB_APP_ID,
  SUPPORT_EMAIL: REACT_APP_SUPPORT_EMAIL,
  API_URL: "https://parchmentnotebook-api.glitch.me",
  isProduction: REACT_APP_STAGE === "production",
  firebase: {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN
  },
  sentry: {
    dns: REACT_APP_SENTRY_DNS
  },
  publicPushKey: REACT_APP_PUBLIC_PUSH_KEY
};