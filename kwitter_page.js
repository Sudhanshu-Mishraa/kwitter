var firebaseConfig = {
      apiKey: "AIzaSyDOSNDAvFYmbtg2b1PD-13ohl322TVRmO0",
      authDomain: "kwitternew-86eeb.firebaseapp.com",
      databaseURL: "https://kwitternew-86eeb-default-rtdb.firebaseio.com",
      projectId: "kwitternew-86eeb",
      storageBucket: "kwitternew-86eeb.appspot.com",
      messagingSenderId: "724230579776",
      appId: "1:724230579776:web:8b4dc6008c97713b43a1a5"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");
  function send(){
        msg=document.getElementById("msg").value ;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
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
