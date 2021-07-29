//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,message:msg,like:0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name1 = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name1_tag = "<h4> "+ name1 +"<img src='tick.png' class='user_tick'> </h4>";
message_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' onclick='updateLike(this.id)' id="+ firebase_message_id +" value="+ like +">"
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span> </button> <br>"
document.getElementById("output").innerHTML+=name1_tag+message_tag+like_button+span_tag;
//End code
      } });  }); }
getData();

function logout(){
      window.location=("index.html");
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      }
function updateLike(message_id){
            button_id=message_id;
            likes=document.getElementById(button_id).value;
            updated=Number(likes)+1;
            firebase.database().ref(room_name).child(message_id).update({
                  like:updated
            });
      }