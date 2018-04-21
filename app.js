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

// Capture Button Click
$("#add-user").on("click", function(event) {
    event.preventDefault();
  // Grabbed values from text boxes
  employeeName = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#date-input").val().trim();
  rate = $("#rate-input").val().trim();

  console.log(employeeName);
  console.log(role);
  console.log(startDate);
  console.log(rate);


    //create an object to hold the data
    var employeeData =  {
        EmployeeName:employeeName,
        EmployeeRole: startDate,
        MonthlyRate:rate
  };
    //push the data into the database
    database.ref().push(employeeData);
  });