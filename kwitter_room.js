
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDK2T3--RHIrVJfS3yOmsBvA-A14q2phN4",
      authDomain: "kwitterapp-580fb.firebaseapp.com",
      databaseURL: "https://kwitterapp-580fb-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-580fb",
      storageBucket: "kwitterapp-580fb.appspot.com",
      messagingSenderId: "699317041671",
      appId: "1:699317041671:web:9d653fd966833c1d3108a2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    
          localStorage.setItem("room_name", room_name);
    
    
          window.location = "kwitter_page.html"
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("Room name - " + Room_names);
          row = "<div class = 'room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names+ "</div><hr>"
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "Kwitter_page.html";
    }
    
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }
    