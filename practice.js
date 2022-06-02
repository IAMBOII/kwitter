var  firebaseConfig = {
    apiKey: "AIzaSyC5JtnGXPSkLp4zJgUM00vTPMD0KCQN3-8",
    authDomain: "kwitter-c05b6.firebaseapp.com",
    databaseURL: "https://kwitter-c05b6-default-rtdb.firebaseio.com",
    projectId: "kwitter-c05b6",
    storageBucket: "kwitter-c05b6.appspot.com",
    messagingSenderId: "771381360891",
    appId: "1:771381360891:web:7c820ca6383be8fee2d85e"
  };
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItemfunction Add_User() { user_name = document.getElementById("user_name").value; firebase.database().ref("/").child(user_name).update({ purpose: "adding user" }); }