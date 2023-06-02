const form = document.getElementById("form");
const username = document.getElementById("username");
const rg = document.getElementById("rg");
const cpf = document.getElementById("cpf");
const dd = document.getElementById("dd");
const number = document.getElementById("number")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const rgValue = rg.value;
  const passwordValue = cpf.value;
  const ddConfirmation = dd.value;
  const numberConfirmation = number.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (rgValue === "") {
    setErrorFor(rg, "O rg é obrigatório.");
  }
  else {
    setSuccessFor(rg);
  }

  if (passwordValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");
  } else if (passwordValue.length < 11) {
    setErrorFor(cpf, "O CPF precisa ter 11 caracteres.");
  } else {
    setSuccessFor(cpf);
  }

  if (ddConfirmation === "") {
    setErrorFor(dd, "O DD é obrigatório.");
  } else if (ddConfirmation.length < 2) {
    setErrorFor(dd, "O DD precisa ter 2 digitos.");
  } else {
    setSuccessFor(dd)
  }

  if (numberConfirmation === "") {
    setErrorFor(number, "O Número é obrigatório.");
  } else if (numberConfirmation.length < 9) {
    setErrorFor(number, "O Número precisa ter 9 digitos.");
  } else {
    setSuccessFor(number);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}