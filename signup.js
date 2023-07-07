
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDMiwLIRA67yAZaPKGqKvlivQP_JasOG30",
    authDomain: "learn-auth-2ef8e.firebaseapp.com",
    projectId: "learn-auth-2ef8e",
    storageBucket: "learn-auth-2ef8e.appspot.com",
    messagingSenderId: "170163396211",
    appId:  "1:170163396211:web:61551dd3c488e7f85b5406"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // //signuup function//

  let signUpButton = document.getElementById("signup");
  signUpButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("cliked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth 
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      alert("user signup up successful");

      var user = userCredential.user;
      console.log("user, user.email");
    })

    .catch((error) =>{
      var errorCode = error.Code;
      var errorMessage = error.message;
      console.log("error code, errorCode");
      console.log("error Message, error message");
      alert(errorMessage);
    });

  });


 
  // signin funtion


  let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sign in clicked");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth 
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      alert("user signup up successful");

      var user = userCredential.user;
      console.log("user, user.email");
    })

    .catch((error) =>{
      var errorCode = error.Code;
      var errorMessage = error.message;
      console.log("error code, errorCode");
      console.log("error Message, error message");
      alert(errorMessage);
    });

});


// auth.onAuthStateChanged(function (user){
//   if (user) {
//       var email = user.email;
//       var users = document.getElementById("user");
//       users.appendChild(text);
//       console.log(users);
//   }
//   else {

//   }
// });




  
  

  

