//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send() {
          msg=document.getElementById("msg").nodeValue;
          firebase.database().ref("room_name").push({
                name:user_name,message:msg,like:0
          });

          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";  
  }
  