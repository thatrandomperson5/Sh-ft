fetch('https://discord.com/api/guilds/999798556644868196/widget.json')
  .then(response => response.json())
  .then(data => {
   const status = Array.from(document.getElementsByClassName("status-wrap"))
   
   status.forEach(tag => {
      
      tag.innerHTML = `<img class="circle-image" src=${data["members"][1]["avatar_url"]}><b class="wtext">&nbsp;${data["members"][1]["username"]} &bull; ${data["members"][1]["status"]}</b>`
   });
  });
