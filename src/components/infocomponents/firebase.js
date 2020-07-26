import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'YOUR_API_KEY',
	authDomain: 'fitom-site.firebaseapp.com',
	databaseURL: 'YOUR_DB_URL',
	projectId: 'PROJECT_ID',
	storageBucket: 'YOUR_STORAGE_BUCKET',
	messagingSenderId: 'YOUR_MESSAGE_SENDER_ID',
	appId: 'YOUR_API_ID'
});

const db = firebaseApp.firestore();

export { db };
