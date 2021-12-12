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
    
   
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome  "+user_name+"  !";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"add room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE
function getData() {
       firebase.database().ref("/").on('value', function(snapshot) {
              document.getElementById("output").innerHTML = "";
               snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
                   console.log("Room Name - " + Room_names); 
                   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                   document.getElementById("output").innerHTML += row; }); }); }

                   getData();
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
      function Logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

      //End code
     

