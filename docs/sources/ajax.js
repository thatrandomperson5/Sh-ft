function pre_rend(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload =  () => {
        

        document.write(this.responseText);
        
    }
    console.log(page)
    xhttp.open("GET", page, true);
    xhttp.send();
    
}
window.addEventListener("hashchange", () => {
    pre_rend(`${location.pathname}${location.hash.slice(1)}.xml`)
});