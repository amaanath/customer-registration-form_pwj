function showPassword(icon) {
  var pwd = document.getElementById("password");

  if (pwd.type === "password") {
    pwd.type = "text";
  } else {
    pwd.type = "password";
  }

  icon.classList.toggle("fa-eye-slash");
}

function matchPassword() {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;

  if (password != confirmpassword) {
    var passconf = document.getElementById("password_confirmation");

    passconf.classList.add("alert-danger");
    passconf.setAttribute("role", "alert");

    passconf.innerHTML = "Passwords do not match";
  } else {
    var passconf = document.getElementById("password_confirmation");

    passconf.classList.remove("alert-danger");
    passconf.innerHTML = "";
  }
}
