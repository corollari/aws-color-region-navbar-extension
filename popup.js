function updateColor(region) {
    return function (event) {
        const color = event.target.value;
        chrome.storage.local.set({
            [region]: color
        })
    }
}

document.querySelectorAll('input').forEach(input => {
    const cell = input.parentElement.parentElement;
    const region = cell.firstElementChild.innerText;
    input.addEventListener('change', updateColor(region));
    if(window.browser !== undefined){
        // On Firefox
        // Workaround for a bug in their color picker
        input.type="text";
    }
    chrome.storage.local.get(region, (results) => {
        let color = results[region];
        if (color !== undefined) {
            input.value = color;
        }
    });
})