//capturo form y creo que event listener que al apretar submit capture el evento del form yse ponga por default el form
//creo variables para recibir valores e igualo las variables a lo ingresado en los input de su valor y muestro x consola
const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#signupEmail").value;
  const password = document.querySelector("#signupPassword").value;
  console.log("submiting", "email: ", email, "password:", password);

  //autenticar con firebase agregando el script de auth de firebase al final del body
  //al final del script anterior agregamos tambien: const auth=firebase.auth();
  //esta constante se agrega para acceder al servicio de autenticacion pq que quiero que lo valide
  //y vamos a guardar en un objeto el metodo auth para no llamar todo el tiempo a firebase.auth
  //este metodo significa que uno quiere que valide los inputs email y constrase;a
  //asi creamos un objeto para poder mandarle a firebase un correo y una contrase;a

  //ponemos auth, y abajo agregamos un metodo que crea un usuario basado en el correo
  //y la contrase;a y pasamos esos valores por parametro
  //nos devuelve una respuesta, la capturamos, son las credenciales del usuario,
  //recibimos user Credential que significa q ya lo registro, y usamos las credenciales,
  //luego, en la arq del front end
  //
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("signed up");
    });
});
