
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDXIaURmOswm8kTN42HVqU8tFNSgDx_kNE",
      authDomain: "kwitter-7f187.firebaseapp.com",
      databaseURL: "https://kwitter-7f187-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f187",
      storageBucket: "kwitter-7f187.appspot.com",
      messagingSenderId: "811390246168",
      appId: "1:811390246168:web:d4efef01da106c162e926d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html"
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = kwitter_page.html;
}
function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
