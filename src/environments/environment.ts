// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA8bd4FCV7ce9yN6Xe9peRuGxIan-3WcxE',
    authDomain: 'ion-fcm-push.firebaseapp.com',
    databaseURL: 'https://ion-fcm-push.firebaseio.com',
    projectId: 'ion-fcm-push',
    storageBucket: 'ion-fcm-push.appspot.com',
    messagingSenderId: '958035621584'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
