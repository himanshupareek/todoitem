// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyA-xR6QYdKX-1gXZd4muF8yBRKSRdGT2Zk",
    authDomain: "todolistapp-621ce.firebaseapp.com",
    databaseURL: "https://todolistapp-621ce.firebaseio.com",
    projectId: "todolistapp-621ce",
    storageBucket: "todolistapp-621ce.appspot.com",
    messagingSenderId: "1009076082632"
  }
};
