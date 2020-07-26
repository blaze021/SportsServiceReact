import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCQg2cuGIbbmlAHrWidvJeReqDs7Pe_3sM',
	authDomain: 'fitom-site.firebaseapp.com',
	databaseURL: 'https://fitom-site.firebaseio.com',
	projectId: 'fitom-site',
	storageBucket: 'fitom-site.appspot.com',
	messagingSenderId: '78257898162',
	appId: '1:78257898162:web:fa5c0fa0e8f89e1389ffab'
});

const db = firebaseApp.firestore();

export { db };
