async function index() {
  fetch("https://discord.com/api/guilds/999798556644868196/widget.json")
    .then((response) => response.json())
    .then((data) => {
      const status = Array.from(document.getElementsByClassName("status-wrap"));

      status.forEach((tag) => {
        tag.innerHTML = `<img class="circle-image" src=${data["members"][1]["avatar_url"]}><b class="wtext">&nbsp;${data["members"][1]["username"]} &bull; ${data["members"][1]["status"]}</b>`;
      });
    });
}
var myIndex = 0;
var myIndex2 = 0;
carousel2();
carousel();
//index();

async function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

async function carousel2() {
  var i2;
  var x2 = document.getElementsByClassName("mySlides2");
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.display = "none";
  }
  myIndex2++;
  if (myIndex2 > x2.length) {
    myIndex2 = 1;
  }
  x2[myIndex2 - 1].style.display = "block";
  setTimeout(carousel2, 5000);
}
