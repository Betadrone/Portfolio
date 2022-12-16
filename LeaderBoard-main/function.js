//Page 1 code...
//To load the games data and table info as the page loads

window.onload = (event) => {
  var tableCode = 
  "<table>\
  <tr>\
  <th>Games</th> <th>Platform</th>\
  </tr>";
  
  fetch("https://lime-faithful-hippo.cyclic.app/api/games")
  .then(function(response){
    return response.json()
  })
  .then(function(jsonObject){
    console.log(jsonObject);
    jsonObject.forEach(function(currentGame) {
      tableCode += `<tr><td><a href= "Page3.html?id=${currentGame.id}">${currentGame.GameName}</a></td>\
      <td>${currentGame.Platform}</td></tr>`;
    })

    tableCode += "</table>";
    
    
    document.getElementById("gameTable").innerHTML = tableCode;
  })
};

console.log("1")

function MovePage(){
  location.replace("Page2.html");
}
