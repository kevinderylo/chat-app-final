
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCydkjjy9Zj4VqpCqLxkL0N7jdAhxr6NtE",
      authDomain: "kwitter-c8a33.firebaseapp.com",
      databaseURL: "https://kwitter-c8a33-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8a33",
      storageBucket: "kwitter-c8a33.appspot.com",
      messagingSenderId: "886363591433",
      appId: "1:886363591433:web:5322a57d85355f12bd39d8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");


    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

        purpose:"Adding room name..."
      });
  localStorage.setItem("room_name", room_name);
  window.location="chat_page.html";
}
document.getElementById("user_name").innerHTML="welcome "+ user_name +" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("room name- "+ room_names);
      row="<div class='room_name' id="+room_names +" onclick='redirect(this.id)' >#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function logout(){
window.location=("index.html");
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chat_page.html";
}