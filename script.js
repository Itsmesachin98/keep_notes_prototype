const noteBox = document.querySelector(".note-box");
const noteText = document.querySelector(".note-text");

noteText.addEventListener("click", () => {
    if (noteBox.children.length === 1) {
        createTitle();
        createButton();
    }

    const closeButton = document.querySelector(".close-button");
    const titleText = document.querySelector(".title-text");
    const buttonContainer = document.querySelector(".button-container");
    closeButton.addEventListener("click", () => {
        titleText.remove();
        buttonContainer.remove();
    });
});

// This function creates a Title
const createTitle = () => {
    const div = document.createElement("div");
    div.innerText = "Title";
    div.setAttribute("contenteditable", "true");
    div.classList.add("title-text");
    noteBox.insertBefore(div, noteText);
};

// This function creates a button
const createButton = () => {
    const div = document.createElement("div");
    div.classList.add("button-container");
    const button = document.createElement("button");
    button.classList.add("close-button");
    button.innerText = "Close";
    div.appendChild(button);
    noteBox.appendChild(div);
};
