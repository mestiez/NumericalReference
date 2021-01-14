const pushHistory = (input) => {
    window.history.pushState(input, window.title, `${window.location.origin}/?${inputParam}=${input}`);
}

const getUrlParams = () => {
    return new URLSearchParams(new URL(window.location.href).search.slice(1));
}

const isStateAboutPage = (state) => (state === aboutStateIdentity);

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