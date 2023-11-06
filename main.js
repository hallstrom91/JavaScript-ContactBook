"strict";

// Setup WopWOp
const addButton = document.getElementById("add-btn");
const clrButton = document.getElementById("clr-btn");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const saved = document.getElementById("saved");
let editMode = false;

function changeValue(button, fullName, phone) {
  editMode = !editMode;
  button.textContent = editMode ? "Spara" : "Ändra";
  fullName.disabled = !editMode;
  phone.disabled = !editMode;
}

// Clear Contact-Fields Button  (unsaved)
function clearContactFields() {
  clrButton.addEventListener("click", function () {
    fullName.value = "";
    phone.value = "";
  });
}

function addContactNow() {
  // Add New Contact w buttton-click
  addButton.addEventListener("click", function () {
    // Fetch and assign new name and number
    const name = fullName.value;
    const number = phone.value;

    // Create locked inputfield for name
    const savedName = document.createElement("input");
    savedName.type = "text";
    savedName.value = name;
    savedName.disabled = !editMode;
    savedName.classList.add("newInput");

    // Create locked inputfield for phone
    const savedPhone = document.createElement("input");
    savedPhone.type = "tel";
    savedPhone.value = number;
    savedPhone.disabled = !editMode;
    savedPhone.classList.add("newInput");

    // Create a new storage div for saved inputfields and info
    const savedContacts = document.createElement("div");
    savedContacts.appendChild(savedName);
    savedContacts.appendChild(savedPhone);
    saved.appendChild(savedContacts);

    // Edit button for saved contacts
    const changeButton = document.createElement("button");
    changeButton.textContent = "Ändra";
    changeButton.classList.add("newBtn");
    changeButton.addEventListener("click", function () {
      changeValue(changeButton, savedName, savedPhone);
    });
    // Save button for edited (saved) contacts
    const saveButton = document.createElement("button");
    saveButton.textContent = "Spara";
    saveButton.classList.add("newBtn");
    saveButton.style.display = "none";

    saveButton.addEventListener("click", function () {
      savedName.value = fullName.value;
      savedPhone = phone.value;
      changeValue(changeButton, savedName, savedPhone);
      saveButton.style.display = "none";
      changeButton.style.display = "inline-block";
    });
    saved.appendChild(changeButton);
    saved.appendChild(saveButton);

    // Clear fields after input save
    fullName.value = "";
    phone.value = "";
  });
}
