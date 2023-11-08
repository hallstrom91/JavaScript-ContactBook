"strict";

// Setup WopWOp
const addButton = document.getElementById("add-btn");
const clrButton = document.getElementById("clr-btn");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const saved = document.getElementById("saved");
let editMode = false;

function createEditBtn(savedName, savedPhone) {
  // Edit button for saved contacts
  let changeButton = document.createElement("button");
  changeButton.textContent = "Ändra";
  changeButton.classList.add("newBtn");
  // Save button for edited (saved) contacts
  let saveButton = document.createElement("button");
  saveButton.textContent = "Spara";
  saveButton.classList.add("newBtn");
  saveButton.style.display = "none";
  // Listen for click on Edit/Change button
  changeButton.addEventListener("click", function () {
    changeValue(saveButton, savedName, savedPhone);
    saveButton.style.display = "inline-block";
    changeButton.style.display = "none";
  });
  // Listen for click on Save button
  saveButton.addEventListener("click", function () {
    savedName.value = fullName.value;
    savedPhone.value = phone.value;
    changeValue(changeButton, savedName, savedPhone);
    saveButton.style.display = "none";
    changeButton.style.display = "inline-block";
  });
  saved.appendChild(changeButton);
  return [changeButton, saveButton];
}

// Change Value in saved Inputfields Function
function changeValue(button, fullName, phone) {
  editMode = !editMode;
  button.textContent = editMode ? "Spara" : "Ändra";
  fullName.disabled = !editMode;
  phone.disabled = !editMode;
}

// Listen for "click" and add contact
addButton.addEventListener("click", addContactNow);

// Add contacts function
function addContactNow() {
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
  // Call edit function N buttons
  let [changeButton, saveButton] = createEditBtn(savedName, savedPhone);
  let removeButton = createRemoveBtn(savedName, savedPhone, savedContacts);
  savedContacts.appendChild(changeButton);
  savedContacts.appendChild(saveButton);
  savedContacts.appendChild(removeButton);
  // Clear Static inputfields after adding to dynamic
  fullName.value = "";
  phone.value = "";
}

// Clear Contact-Fields Button (unsaved inputfields)
clrButton.addEventListener("click", clearContactFields);

function clearContactFields() {
  fullName.value = "";
  phone.value = "";
}

// Remove saved contacts function
function createRemoveBtn(savedName, savedPhone, savedContacts) {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Delete";
  removeButton.classList.add("newBtn");

  removeButton.addEventListener("click", function () {
    savedContacts.removeChild(savedName);
    savedContacts.removeChild(savedPhone);
    savedContacts.removeChild(removeButton);
  });
  return removeButton;
}

// error messages
if (fullName === "" && phone === "" && editmode) {
}

// UNDER NEW STORAGE DIV IF CODE BREAKS
/*    // Edit button for saved contacts
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
    saved.appendChild(saveButton); */
