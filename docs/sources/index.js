fetch('https://discord.com/api/guilds/999798556644868196/widget.json')
  .then(response => response.json())
  .then(data => {
   const status = Array.from(document.getElementsByClassName("status-wrap"))
   
   status.forEach(tag => {
      
      tag.innerHTML = `<img class="circle-image" src=${data["members"][1]["avatar_url"]}><b class="wtext">&nbsp;${data["members"][1]["username"]} &bull; ${data["members"][1]["status"]}</b>`
   });
  });
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}
