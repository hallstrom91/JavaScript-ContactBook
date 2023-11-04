"strict";

// Buttons
addButton = document.getElementById("add-btn");
clrButton = document.getElementById("clr-btn");
const editMode = false;

// Information from Input Fields
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");

// Store saved contacts
const saved = document.getElementById("saved");

// Add Contact Button
addButton.addEventListener("click", function () {
  // fetch name and number
  const name = fullName.value;
  const number = phone.value;
  // create locked inputfield for name
  const savedName = document.createElement("input");
  savedName.type = "text";
  savedName.value = name;
  savedName.disabled = true;
  savedName.classList.add("newInput");
  // create locked inputfield for phone
  const savedPhone = document.createElement("input");
  savedPhone.labels = "Telefon";
  savedPhone.type = "tel";
  savedPhone.value = number;
  savedPhone.disabled = true;
  savedPhone.classList.add("newInput");
  // create a new storage div for saved inputfields and info
  const savedContacts = document.createElement("div");
  savedContacts.appendChild(savedName);
  savedContacts.appendChild(savedPhone);
  saved.appendChild(savedContacts);
  // create button for edit new locked inputfields
  const editButton = document.createElement("newBtn");
  editButton.textContent = editMode ? "Uppdatera" : "Ändra";
  editButton.classList.add("button");
  editButton.addEventListener("click", function () {
    if (editMode) {
      savedName.value = fullName.value;
      savedPhone.value = phone.value;
    }
    editMode = !editMode;
    savedName.disabled = !editMode;
    savedPhone.disabled = !editMode;
    editButton.textContent = editMode ? "Uppdatera" : "Ändra";
  });
  saved.appendChild(savedContacts);
  savedContacts.appendChild;
  // clear fields after input save
  fullName.value = "";
  phone.value = "";
});

// Clear Contact-Fields Button
clrButton.addEventListener("click", function () {
  fullName.value = "";
  phone.value = "";
});
