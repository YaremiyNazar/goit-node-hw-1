const { program } = require("commander");
const contactsService = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case "get":
      const getContact = await contactsService.getContactById(id);
      return console.log(getContact);
    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "remove":
      const delContact = await contactsService.removeContact(id, {
        name,
        email,
        phone,
      });
      return console.log(delContact);
    default:
             console.warn("\x1B[31m Unknown action type!");
  }
};
program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>");
program.parse();

const options = program.opts();
invokeAction(options)
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({
//   action: "add",
//   name: "Nazar Yaremiy",
//   email: "yaremiy.nazar@gmail.com",
//   phone: "063-846-03-35",
// });
// invokeAction({ action: "remove", id: "yJG9ruSIIxCTAI_7_5JXu" });
