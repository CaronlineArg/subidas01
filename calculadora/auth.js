$(document).ready(function()
{// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPkXyO2HJ2B34zBp9aHyt4CjU1LBUaW8g",
    authDomain: "calc-f825a.firebaseapp.com",
    projectId: "calc-f825a",
    storageBucket: "calc-f825a.appspot.com",
    messagingSenderId: "420967459928",
    appId: "1:420967459928:web:0bdbdac57e0a0162d1ee2d",
    measurementId: "G-V35LDC65E6"
 };
 firebase.initializeApp(config);
// Se asigna a una variable cada elemento input con su ID
var user_name2 = document.getElementById('user_name2');
var email = document.getElementById('email');
var password2 = document.getElementById('password2');
var submit_button = document.getElementById('submit_button');
// Se conecta con la base de datos de Firebase
var dataDB = firebase.database().ref('Datos').push();
// Le agregamos un evento click al botón de enviar enviarData.addEventListener('click', enviar);
function submit () {
   // Se envía los valores de cada input
   dataDB.set({
      user_name2: user_name2.value,
      email: email.value,
      password2: password2.value,
   });
}});