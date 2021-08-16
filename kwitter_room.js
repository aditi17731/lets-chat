// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBXyQL8b7kIydGQzO-M5ddfRbKxbgZ7lWQ",
      authDomain: "kwitter-711b3.firebaseapp.com",
      databaseURL: "https://kwitter-711b3-default-rtdb.firebaseio.com",
      projectId: "kwitter-711b3",
      storageBucket: "kwitter-711b3.appspot.com",
      messagingSenderId: "1018765169627",
      appId: "1:1018765169627:web:02fc77146eb7d524378dfe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome "+user_name+"!!!!!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            pourpse:"addingRoomName"
      });

      localStorage.setitem("room_name".room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name) {
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";  
}

