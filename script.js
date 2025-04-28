const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.srg = "images/delete.png";
    notes.Container.appendChild(inputBox).appendChild(img);
})