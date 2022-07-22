async function pre_rend(page) {
    fetch(page)
        .then(response => response.text())
        .then(data =>{
            document.body.innerHTML = data;
        })
    
}
window.addEventListener("hashchange", () => {
    if (location.hash != "#") {
        var href = location.href
        var anti = document.querySelectorAll("body script")
        
        pre_rend(`${href.substring(0, href.lastIndexOf('/')) + "/"}${location.hash.slice(1)}.html`)
        
    } else {
        pre_rend(`${location.pathname}index.html`)
    }
});