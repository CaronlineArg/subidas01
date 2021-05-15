//modal
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");
ui.start("#firebaseui-auth-container", {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
  ],
  // Other config options...
});

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

var exampleModal = document.getElementById("myModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector(".modal-title");
  var modalBodyInput = exampleModal.querySelector(".modal-body input");

  modalTitle.textContent = "New message to " + recipient;
  modalBodyInput.value = recipient;
});
