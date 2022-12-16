//Page 4 code...
//This follows the add details button
//and asks the user to add needed info
window.onload = (event) => {

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

      // Print the name of the game being whose score is being altered
      var tag = document.getElementById("GNLBD");
      tag.innerHTML = ` Add score to ${jsonObject.GameName}`;

      console.log(69);
  })
  };

  function AddDetails(){

    let player;
    player = document.getElementById("player").value.trim();
    console.log(player);

    let score;
    score = document.getElementById("score").value.trim();
    console.log(score);

    let time;
    time = document.getElementById("time").value.trim();
    console.log(time);
    
    let clear = "";
    document.getElementById("player").value = clear;
    document.getElementById("score").value = clear;
    document.getElementById("time").value = clear;
    
    const queryString = window.location.search;
    var urlParameters = new URLSearchParams(queryString);
    const url = urlParameters.get("id");

    //Creates a json Object using the provided data
    var stuff = `{"gameID":${url}, "player":"${player}", "score":${score}, "time":"${time}"}`;

    //Validation of data via if/else statements
    if(player == null || player == "")
    {
      document.getElementById("msg2").innerHTML = "Error: Missing player name";
    }
    else if((score == null || score == "") && (time == null || time == ""))
    {
      console.log("Missing score and time")
      document.getElementById("msg2").innerHTML = "Error: Please add a score or time";
    }
    else if((score == null || score == "") || (time == null || time == ""))
    {
      if(score == null || score == "")
      {
        score = null;
        var stuff = `{"gameID":${url}, "player":"${player}", "score":${score}, "time":"${time}"}`;

        fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${url}`,{
          method:"POST",
          body: stuff,
          headers: {"Content-type":"application/json; charset=UTF-8"}
        })
        .then(function(response){
            return response.json;
        })
        .then(function(jsonObject){
            console.log(jsonObject);
            document.getElementById("msg2").innerHTML = `Server Response: ${jsonObject.message}`;
            console.log(jsonObject.message);
        })
        .catch(function(error){
          console.log(`Error: ${error}`);
          document.getElementById("msg2").innerHTML = `Error: ${error}`;
        })
        .then(function(something){
            location.replace(`Page3.html?id=${url}`)
        })
      }
      else if(time == null || time == "")
      {
        time = null;
        var stuff = `{"gameID":${url}, "player":"${player}", "score":${score}, "time":${time}}`;

        fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${url}`,{
          method:"POST",
          body: stuff,
          headers: {"Content-type":"application/json; charset=UTF-8"}
        })
        .then(function(response){
            return response.json;
        })
        .then(function(jsonObject){
            console.log(jsonObject);
            document.getElementById("msg2").innerHTML = `Server Response: ${jsonObject.message}`;
            console.log(jsonObject.message);
        })
        .catch(function(error){
          console.log(`Error: ${error}`);
        })
        .then(function(something)
        {
            location.replace(`Page3.html?id=${url}`)
        })
      }
    }
    else
    {
      fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${url}`,{
        method:"POST",
        body: stuff,
        headers: {"Content-type":"application/json; charset=UTF-8"}
      })
      .then(function(response){
          return response.json;
      })
      .then(function(jsonObject){
          console.log(jsonObject);
          document.getElementById("msg2").innerHTML = `Server Response: ${jsonObject.message}`;
          console.log(jsonObject.message);
      })
      .catch(function(error){
        console.log(`Error: ${error}`);
      })
      .then(function(something){
          location.replace(`Page3.html?id=${url}`)
      })
    }
  }
  console.log("70")
