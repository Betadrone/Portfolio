//Page 3 code...
//This follows the link from the games table
//and loads that specific leaderBoard
window.onload = (event) => {
    var tableCode = 
    "<table>\
    <tr>\
    <th>Player</th> <th>Score</th> <th>Time</th>\
    </tr>";

    const queryString = window.location.search;
    var urlParameters = new URLSearchParams(queryString);
    const url = urlParameters.get("id");
  
    // Fetch the info from the database
    fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${url}`)
    .then(function(response){

      // Convert fetched info to a json object 
      return response.json()

    })
    .then(function(jsonObject){

      // Print the fetched info onto the console
      console.log(jsonObject);

      // Take the leaderboard array and print
      // each element of the array in its rightful table spot
      jsonObject.Leaderboard.forEach(function(currentGame) {

        tableCode += `<tr><td>${currentGame.Player}</td>\
        <td>${currentGame.Score}</td>\
        <td>${currentGame.Time}</td></tr>`;

      })

      // Write the game name above its leaderBoard
      var tag = document.getElementById("gameLeaderBoard");
      tag.innerHTML = `${jsonObject.GameName} LeaderBoard`;
      
      console.log(69);
      
    tableCode += "</table>";
  
    document.getElementById("detailTable").innerHTML = tableCode;
  })
  };

  function MovePage(){

  const queryString = window.location.search;
  var urlParameters = new URLSearchParams(queryString);
  const url = urlParameters.get("id");


  location.replace(`Page4.html?id=${url}`);
}
