
  
  // Your web app's Firebase configuration
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

//signuup function//
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) =>{
  //prevent default from submission b

  e.preventDefault();
  console.log("cliked");
  
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
  .createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    location.reload();
    alert("user signup up successful");

    //signed//

    var user = userCredential.user;
    console.log("user, user.email");
  })

  .catch((error) =>{
    var errorCode = error.Code;
    var errorMessage = error.message;
    console.log("error code, errorCode");
    console.log("error Message, errorMessage");
    alert(errorMessage);

  }); 
});

//SIGNIN FUNCTION//

let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sign in clicked");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth 
  .signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("user", user.email);

    alert("login was successful")
    window.location = "index.html";


  })

  .catch((error) =>{
    var errorCode = error.Code;
    var errorMessage = error.message;
    console.log("error code, errorCode");
    console.log("error Message, errorMessage");
    alert(errorMessage);

  }); 
});