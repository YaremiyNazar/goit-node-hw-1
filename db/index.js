// const fs = require("fs/promises");
// const path = require("path");
// const contactsPath = path.join(__dirname, "contacts.json");

// const listContacts = async () => {
//     const data = await fs.readFile(contactsPath);
//     return JSON.parse(data);
// }
// const getContactById = (contactId) => {

// }

// const removeContact = (contactId) => {

// }

// const addContact = (name, email, phone) => {

// }

// module.exports = {
// listContacts,
// getContactById,
// removeContact,
// addContact,
// }

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

module.exports = { listContacts, getContactById, removeContact, addContact };
