async function pre_rend(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload =  () => {
        document.write(this.responseText);
    }
    xhttp.open("GET", page, true);
    xhttp.send();
}
window.addEventListener("hashchange", () => {
    console.log(location.hash)
});