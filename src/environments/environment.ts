// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	firebase: {
	  apiKey: "AIzaSyDbiOlO90gBhvpo11E3MwPLmnQ1VQ7eRsE",
	  authDomain: "mixityguesser-nodejs.firebaseapp.com",
	  databaseURL: "https://mixityguesser-nodejs.firebaseio.com",
	  projectId: "mixityguesser-nodejs",
	  storageBucket: "mixityguesser-nodejs.appspot.com",
	  messagingSenderId: "421527882914",
	  appId: "1:421527882914:web:e4b0b602a5135bcba15bfb"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
