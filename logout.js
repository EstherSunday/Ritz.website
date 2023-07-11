const firebaseConfig = {
  apiKey: "AIzaSyBWNYOE2tyeDlelSZsc7aBvamDVWem9NGc",
  authDomain: "ritz-8dd7e.firebaseapp.com",
  projectId: "ritz-8dd7e",
  storageBucket: "ritz-8dd7e.appspot.com",
  messagingSenderId: "942591689426",
  appId: "1:942591689426:web:76a76b2c78cf936473e30b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(function (user){
  if (user){
    var email = user.email;
    var user = document.getElementById("user");
    var text = document.createTextNode("email");
    user.appendChild(text);
    console.log(user);
    // console.log(user.name);
  }
})


//logout/ function/

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) =>{
  e.preventDefault();
  console.log("logout cliked");
  auth.signOut();
  alert("signed out");
  window.location = "index.html";
});
