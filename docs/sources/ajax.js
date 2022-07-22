async function pre_rend(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload =  () => {
        console.log(xhttp.responseURL)
        document.write(this.responseText);
        
    }
    xhttp.open("GET", page, true);
    xhttp.send();
    
}
window.addEventListener("hashchange", () => {
    pre_rend(`${location.hash.slice(1)}`)
});