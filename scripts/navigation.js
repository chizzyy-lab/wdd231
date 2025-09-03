const title = document.getElementById("myTitle"); // Get element by ID
const parent = title.parentNode;                  // Move up to parent
const firstChild = title.firstChild;              // Move down to first child
const next = title.nextSibling;                   // Move sideways to next node

/** @type {{ name: string, sayHello: () => void }} */
const person = {
  name: "Chidera",
  sayHello: function () {
    console.log("Hi! My name is", this.name);
  }
};