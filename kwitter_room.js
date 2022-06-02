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

    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+ user_name+"!"
    
    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"Adding Room Name..."});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+Room_names)
       room="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=room;
      });});}
      
getData();

function redirectToRoomName(Name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}

function Logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="index.html";

}