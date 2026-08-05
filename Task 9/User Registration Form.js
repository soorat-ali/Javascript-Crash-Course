const style = document.createElement("style");
style.textContent = `
  .error {
    color: red;
    font-size: 0.85em;
    margin: 0 0 10px;
  }
  .field {
    margin-bottom: 10px;
  }
`;
document.head.appendChild(style);

const form = document.createElement("form");

function createField(labelText, inputType, name) {
  const wrapper = document.createElement("div");
  wrapper.className = "field";

  const label = document.createElement("label");
  label.textContent = labelText;

  const input = document.createElement("input");
  input.type = inputType;
  input.name = name;

  const error = document.createElement("p");
  error.className = "error";

  label.appendChild(input);
  wrapper.appendChild(label);
  wrapper.appendChild(error);
  form.appendChild(wrapper);

  return { input, error };
}

const nameField = createField("Name: ", "text", "name");
const emailField = createField("Email: ", "text", "email");
const passwordField = createField("Password: ", "password", "password");

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Register";
form.appendChild(submitButton);

document.body.appendChild(form);

function setError(field, message) {
  field.error.textContent = message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const nameValue = nameField.input.value.trim();
  const emailValue = emailField.input.value.trim();
  const passwordValue = passwordField.input.value;

  setError(nameField, "");
  setError(emailField, "");
  setError(passwordField, "");

  if (nameValue === "") {
    setError(nameField, "Name is required.");
    isValid = false;
  }

  if (emailValue === "") {
    setError(emailField, "Email is required.");
    isValid = false;
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    setError(emailField, "Email must include an '@' and a '.'.");
    isValid = false;
  }

  if (passwordValue === "") {
    setError(passwordField, "Password is required.");
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(passwordField, "Password must be at least 8 characters long.");
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    form.reset();
  }
});
