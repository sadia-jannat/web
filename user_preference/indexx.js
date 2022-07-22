const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const selectLineSize = document.getElementById("selectLineSize");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const setValues = (fontSize, bgColor, lineSize) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    selectLineSize.value = lineSize;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
    mainElement.style.lineHeight = lineSize;
};

// load LocalStorage Value
const initialSetup = () => {
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");
    const lineSize = localStorage.getItem("lineSize");

    if (bgColor && fontSize && lineSize) {
        setValues(fontSize, bgColor, lineSize);
    }
    if (!bgColor && !fontSize && !lineSize) {
        setValues("16px", "aqua", "5px");
    }
    if (!bgColor && fontSize && lineSize) {
        setValues(fontSize, "aqua", "lineSize");
    }
    if (bgColor && !fontSize && lineSize) {
        setValues("16px", bgColor, lineSize);
    }

    if (bgColor && fontSize && !lineSize) {
        setValues(fontSize, bgColor, "5px");
    }
};

// changeFontSize
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};

// changeBgColor
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
};
// changeLineSize
const changeLineSize = (event) => {
    const selectedLineSize = event.target.value;
    mainElement.style.lineSize = selectedLineSize;
    localStorage.setItem("lineSize", selectedLineSize);
};

// clearLocalStorage
const clearLocalStorage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    localStorage.removeItem("lineSize");
    setValues("16px", "aqua", "5px");
};

// add event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
selectLineSize.addEventListener("change", changeLineSize);
resetButton.addEventListener("click", clearLocalStorage);

initialSetup();