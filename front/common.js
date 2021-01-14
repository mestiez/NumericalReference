const inputParam = 'v';

const userInputBox = document.getElementById("user-input");
const resultBox = document.getElementById("result-box");
const submitButton = document.getElementById("submit-button");
const aboutButton = document.getElementById("about-button");

const requestString = '/api?input=';
const exampleInput = '25 m/s';
const aboutStateIdentity = 'about';

let response = {};
let results = [];
let hideHardToRead = true;

window.addEventListener('load', () => {
    const urlParams = getUrlParams();
    const input = urlParams.get(inputParam);
    if (input) {
        if (isStateAboutPage(input)) {
            showAbout();
            return;
        }

        userInputBox.value = input;
        requestReferences(input);
    }
});

window.addEventListener('popstate', (d) => {
    const state = d.state;

    if (isStateAboutPage(state)) {
        showAbout();
        return;
    }

    userInputBox.value = state;
    requestReferences(state);
});