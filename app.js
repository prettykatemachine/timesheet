// Initialize Firebase
var config = {
    apiKey: "AIzaSyBKi68QDHEzj9NpLFtJ8c6EQ6gphPQV56M",
    authDomain: "employeedatabase-7f940.firebaseapp.com",
    databaseURL: "https://employeedatabase-7f940.firebaseio.com",
    projectId: "employeedatabase-7f940",
    storageBucket: "employeedatabase-7f940.appspot.com",
    messagingSenderId: "471795698024"
};
firebase.initializeApp(config);

var database = firebase.database();

var employeeName;
var role;
var startDate;
var rate;