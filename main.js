"strict";

/*
=======================================================
Setup WopWOp - Lets roll!
=======================================================
*/

const addButton = document.getElementById("add-btn");
const clrButton = document.getElementById("clr-btn");
const clrAllButton = document.getElementById("clrAllBtn");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const saved = document.getElementById("saved");

let editMode = false;

/*
=======================================================
Creation of dynamic save and change button
=======================================================
*/

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

/*
=======================================================
Change value on button for saved inputfields Function
=======================================================
*/

function changeValue(button, fullName, phone) {
  editMode = !editMode;
  button.textContent = editMode ? "Spara" : "Ändra";
  fullName.disabled = !editMode;
  phone.disabled = !editMode;
}

/*
=======================================================
Add contacts to the page Function
=======================================================
*/

addButton.addEventListener("click", addContactNow);

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
  savedContacts.classList.add("newInputDiv");
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

/*
=======================================================
Clear Contact-Fields Button (unsaved inputfields)
=======================================================
*/

clrButton.addEventListener("click", clearContactFields);

function clearContactFields() {
  fullName.value = "";
  phone.value = "";
}

/*
=======================================================
Remove saved contacts function
=======================================================
*/

function createRemoveBtn(savedName, savedPhone, savedContacts) {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Delete";
  removeButton.classList.add("newBtn");

  removeButton.addEventListener("click", function () {
    savedContacts.remove(savedContacts);
  });
  return removeButton;
}

/*
=======================================================
Clear all saved inputfields
=======================================================
*/

clrAllButton.addEventListener("click", removeAllSaved);

function removeAllSaved() {
  let deleteField = document.getElementsByClassName("newInputDiv");
  // loop to remove saved inputfields
  while (deleteField.length > 0) {
    let removeNow = deleteField[0];
    removeNow.parentNode.removeChild(removeNow);
  }
}

/*
=======================================================
Form validation w error message 
=======================================================
*/
