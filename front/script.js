const userInputBox = document.getElementById("user-input");
const resultBox = document.getElementById("result-box");
const submitButton = document.getElementById("submit-button");

let response = {};
let results = [];
let hideHardToRead = true;

const roundd = (value, digits) => {
    const p = Math.pow(10, digits);
    return Math.round(value * p) / p;
}

const formatMultiplier = (m) => {
    const oom = Math.floor(Math.log10(m));

    if (oom > 9) {
        const d = Math.pow(10, oom);
        return Math.round(m / d) + 'e' + oom;
    }

    if (oom >= 9)
        return roundd(Math.round(m / 1e8) * 0.1, 2) + ' billion';

    if (oom >= 6)
        return roundd(Math.round(m / 1e5) * 0.1, 2) + ' million';

    if (oom >= 3)
        return Math.round(m);

    if (oom < -3) {
        const d = Math.pow(10, oom);
        return Math.round(m / d) + 'e' + oom;
    }

    return roundd(m, 2);
}

const isValidReference = (r) => {
    return Math.abs(r.multiplier) >= 0.01 && Math.abs(Math.floor(Math.log10(r.multiplier)) <= 10);
}

const requestReferences = (input) => {
    if (!input || input.trim().length == 0)
        return;

    fetch(window.location.href + 'api?input=' + input)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            hideHardToRead = true;
            response = data;
            results = response.references;
            renderResults();
        });
};

const renderResults = () => {
    if (response.error) {
        resultBox.innerHTML = `<h4 style="color: red">${response.error.message}</h4>`;
        return;
    }

    resultBox.innerHTML = `<h2>For reference, ${response.input} ≈</h2>`;

    const createReferenceElement = (r) => {
        const a = document.createElement('a');
        a.href = r.sourceUrl;
        a.classList = 'reference';
        a.innerHTML = `<b title='${r.multiplier}x'>${formatMultiplier(r.multiplier)}</b> times ${r.description}</b> <span class="dim">${r.referenceValue}</span>`;
        return a;
    }

    const sortFunction = (r) => Math.abs(1 - r.multiplier);

    results.filter(r => !hideHardToRead || isValidReference(r)).sort((a, b) => sortFunction(a) - sortFunction(b)).forEach(r => {
        const c = createReferenceElement(r);
        resultBox.appendChild(c);
    });

    const toggleAllButton = document.createElement('div');
    toggleAllButton.classList = 'button reference';
    toggleAllButton.innerText = hideHardToRead ? 'Show all measurements...' : 'Hide useless measurements...';
    toggleAllButton.addEventListener('click', () => {
        hideHardToRead = !hideHardToRead;
        renderResults();
    });
    resultBox.appendChild(toggleAllButton);
};

const doExampleInput = () => {
    userInputBox.value = '25 m/s';
    requestReferences('25 m/s');
};

const showAbout = () => {
    resultBox.innerHTML = 
    `<h2>Numerical Reference</h2>
    <p>
    This is a website that shows your input in comparison to some known measurements in order to give you a point of reference. It is a work in progress, as all measurements are hand-picked, so it only supports 
    <b>countable amounts, distance, speed, energy, time, and mass measurements</b>. This list will expand slowly as time goes on, as will the amount of entries within each category. 
    </p>
    <p>
    It is unlikely that every unit of measurement will be supported because there are way too many of them and I am not insane.
    </p>
    <div class='example-button' onclick="doExampleInput()">
    Just enter something like "25 m/s" in the input box and press Enter.
    </div>
    `;
};

userInputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
        requestReferences(userInputBox.value);
});
submitButton.addEventListener('click', () => requestReferences(userInputBox.value));