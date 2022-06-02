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
    var room_name=localStorage.getItem("room_name");

    function send(){
var msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name;
message:msg;
like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
var name_width_tag="<h4>"+name+"<img class='user_name tick' src='tick.png'> </h4>";
message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button onclick='update_like(this.id)' class='btn warning btn' id="+firebase_message_id+" value="+like+">  ";
spantag="<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button><hr>";
var row=name_width_tag+message_width_tag+like_button+spantag;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function update_like(send_message_id){
console.log("click on like button-"+send_message_id);
button_id=send_message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;

firebase.database().ref(room_name).child(send_message_id).update({like:updated_likes});
}
function Logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
      
      }