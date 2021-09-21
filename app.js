// We use strict mode
"use strict";

// list of contacts
var contacts = [
  {
    name: "Jón Jónsson",
    email: "j@jons.is",
    phoneNumber: "5875522",
    company: "Bóndi",
  },
];

function addRandomContact() {
  // Get the loading overlay
  const loadingDiv = document.querySelector("#loading-overlay");
  // Show the loading overlay
  loadingDiv.classList.remove("hidden");

  // Hide the loading overlay after 1 second
  setTimeout(() => {
    loadingDiv.classList.add("hidden");
  }, 1000);

  // Get a random name to add to the contacts list
  const randomName =
    randomNames[Math.round(Math.random() * (randomNames.length - 1))];
  // Define a new contact to add contact list with a random name and email
  const contact = {
    name: randomName,
    email: randomName + "@jons.is",
    phoneNumber: "5875522",
    company: "Bóndi",
  };
  // Add the contact to our array
  add(contact);
}

// Function in adding a new contact to the list
function add(contact) {
  if (!(contact.name && contact.email)) {
    console.log("Missing fields");
    return;
  }

  let existingContact = contacts.find((c) => c.email == contact.email);
  if (existingContact) {
    console.log("Duplicate was found");
    return;
  }
  contacts.push({
    name: contact.name,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
    company: contact.company,
  });
  addContactElement(contact);
}

// A function that takes care of adding new contacts to the contact list ul
function addContactElement(contact) {
  // Get the contact list from the DOM,
  // this would not work if we would be running this code outside a browser.
  const contactList = document.querySelector("#contact-list");
  // Create a new contact li element
  // this would not work if we would be running this code outside a browser.
  const newContact = document.createElement("li");
  // Set the appropriate class on the new contact
  newContact.classList.add("contact-item");
  // Create a new span for the name
  // this would not work if we would be running this code outside a browser.
  const nameSpan = document.createElement("span");
  // Set the name of the contact in the name span
  nameSpan.append(contact.name + " (" + contact.email + ")");
  // Set the appropriate class on the name span
  nameSpan.classList.add("name");
  // Create a new span for the delete button
  // this would not work if we would be running this code outside a browser.
  const deleteSpan = document.createElement("span");
  // Set the text of the delete button
  deleteSpan.append("delete");
  // Set the appropriate class on the delete span
  deleteSpan.classList.add("delete");
  // Set an event to be fired when the delete button is clicked
  deleteSpan.addEventListener("click", (e) => {
    // Remove the contact from the array
    remove(contact.email);
    e.target.parentElement.classList.add("remove");
    setTimeout(() => {
      // Remove the li from the list
      e.target.parentElement.remove();
    }, 1000);
  });

  // Add the name span to the new contact li
  newContact.appendChild(nameSpan);
  // Add the delete span to the new contact li
  newContact.appendChild(deleteSpan);
  // Add the new contact li to the contact list
  contactList.append(newContact);
}

// Remove corresponding contact / Email address is the unique identifier
function remove(email) {
  let contactIndex = contacts.findIndex((c) => c.email == email);
  if (contactIndex == -1) {
    console.log("Contact not found");
    return;
  }
  contacts.splice(contactIndex, 1);
}

//List all contacts available in the contact list
function listAll() {
  contacts.forEach((c) => {
    addContactElement(c);
  });
}
const randomNames = [
  "Brjánn",
  "Arnór",
  "Geirmundur",
  "Bjarni",
  "Freyr",
  "Sigurbjörg",
  "Jónína",
  "Marín",
  "Sandra",
  "Iðunn",
];
function setTime() {
  // Get current time to display
  const today = new Date();
  const time =
    ("0" + today.getHours()).slice(-2) +
    ":" +
    ("0" + today.getMinutes()).slice(-2) +
    ":" +
    ("0" + today.getSeconds()).slice(-2);
  const clockElement = document.querySelector("#clock");
  clockElement.innerHTML = time;
}
setInterval(setTime, 400);
listAll();
