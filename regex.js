let searchText = document.getElementById("search");
let replText = document.getElementById("repl");
let text = document.getElementById("text");

const repleces = document.getElementById("repleces");
function replace() {
    let searchValue = searchText.value;
    let enteredWord = replText.value;
    let textSearch = text.innerHTML;

    let regex = new RegExp(searchValue, "gi");
    textSearch = textSearch.replace(regex, enteredWord)
    let fontColor = (text.innerHTML = textSearch);

    

    let newSearch = textSearch.search(regex);
    let newMatch = textSearch.match(regex);
    let resualtTest = regex.test(textSearch);

    if (resualtTest === false) {
        console.log("it is not");
    } else {
        resualtTest.style.color = 'red';
        searchText.value = "";
    }

    console.log(resualtTest);
    console.log(newSearch);
    console.log(newMatch);
}
