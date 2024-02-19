const noteBox = document.querySelector(".note-box");
const noteText = document.querySelector(".note-text");
const card = document.querySelector(".card");
const titleNoteContainer = document.querySelector(".title-note-container");
const title = document.querySelector(".title");
const note = document.querySelector(".note");

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

titleNoteContainer.addEventListener("click", () => {
    if (card.children.length === 1) {
        card.classList.add("maximize");
        title.style.overflowY = "auto";
        note.style.overflowY = "auto";
        const div = document.createElement("div");
        div.classList.add("close-btn-container");
        div.appendChild(createCloseButton());
        card.appendChild(div);
    }
    clickCloseButton();
});

const createCloseButton = () => {
    const button = document.createElement("button");
    button.classList.add("close-btn");
    button.innerText = "Close";
    return button;
};

const clickCloseButton = () => {
    const closeBtnContainer = document.querySelector(".close-btn-container");
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        card.classList.remove("maximize");
        title.style.overflowY = "hidden";
        note.style.overflowY = "hidden";
        closeBtnContainer.remove();
    });
};
