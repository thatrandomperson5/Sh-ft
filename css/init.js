//Creation of the little side bar thing on blockquotes.
var discord_auto_blocks = document.querySelectorAll(".discord-msg blockquote");
discord_auto_blocks = Array.from(discord_auto_blocks);
console.log(discord_auto_blocks);
discord_auto_blocks.forEach((qut) => {
  var node = document.createElement("div");
  node.setAttribute("class", "discord-msg-wrap");
  var node2 = document.createElement("div");
  node2.innerHTML = "&nbsp;";
  node2.setAttribute("class", "discord-msg-block");

  node.appendChild(node2);
  node.innerHTML += `<blockquote>` + qut.innerHTML + `</blockquote>`;
  qut.parentNode.replaceChild(node, qut);
});
//Style sheet connecting
var discord_dark_css = document.createElement("link");
discord_dark_css.setAttribute("rel", "stylesheet");
discord_dark_css.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/gh/thatrandomperson5/Sh-ft@3f334e0/css/disfonts/styles.css"
);
var hljs = document.createElement("link");
hljs.setAttribute("rel", "stylesheet");
hljs.setAttribute(
  "href",
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"
);
document.head.append(hljs);
document.head.append(discord_dark_css);
