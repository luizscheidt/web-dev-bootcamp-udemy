const form = document.querySelector("form")
const input = document.querySelector("#album")
const ul = document.querySelector("ul")
const num = document.querySelector("#nota")

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const album = input.value;
    const nota = num.value;
    const newLI = document.createElement('li');
    newLI.innerHTML = `${album} ${nota}`;
    ul.append(newLI)
});

