//Following codes are for Games
function myFunction() {
  document.getElementById("GameButton").addEventListener("click", myFunction);
}
// create NFL = document.createElement('result').innerHTML;
function onloadData(){
}
var temp = document.querySelector('.date');
 	var Hometeambutton = document.querySelector("Hometeam");
 	var awayteam = document.querySelector(".awayteam");
 	var homepoint = document.querySelector(".homepoint");
 	var awaypointDiv = document.querySelector(".awaypoint");
}
  var spark = new flex-container
  var NFL = (document.createElement("game").innerHTML = [
    {
      City: "Arizona",
      Name: "Arizona Cardinal",
      Date: "March 7",
      AwayTeam: "Falcon",
      Hometeam: "Cardinals",
      Homepoint: "78",
      AwayPoint: "45"
    },
    {
      City: "Atlanta",
      Name: "Falcons",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Falcons",
      Homepoint: "23",
      AwayPoint: "8"
    },
    {
      City: "N/S Carolinas",
      Name: "Carolina Panther",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Panther",
      Homepoint: "45",
      AwayPoint: "8"
    },
    {
      City: "Chicago",
      Name: "Chicago Bears",
      Date: "March 7",
      AwayTeam: "Dallas Cowboys",
      Hometeam: "Chicago Bears",
      Homepoint: "78",
      AwayPoint: "8"
    },
    {
      City: "Dallas",
      Name: "Dallas Cowboys",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Dallas Cowboys",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Detroits",
      Name: "Detroit Lions",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Detroit Lions",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Jacksonville",
      Name: "Jacksonville Jaguars",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Jacksonville Jaguars",
      Homepoint: "90",
      AwayPoint: "87"
    },

    {
      City: "GreenBay",
      Name: "Green Bay Packers",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Green Bay Packers",
      Homepoint: "90",
      AwayPoint: "87"
    },

    {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Minnesota",
      Name: "Minnesota Vikings",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Minnesota",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "New Orleans",
      Name: "New Orleans Saints",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New Orleans Saints",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "New York",
      Name: "New York Giants",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New York Giants",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Denver",
      Name: "Denver Broncos",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Denver Broncos",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Houston ",
      Name: "Houston Texan",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Houston Texan",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Miami ",
      Name: " Miami Dolphins ",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Miami Dolphins ",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Tennessee",
      Name: " Tennessee Titans",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Tennessee Titans",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Buffalo",
      Name: " Buffalo Bills",
      Date: "March 7",
      AwayTeam: "Miami Dolphins",
      Hometeam: "Buffalo Bills",
      Homepoint: "90",
      AwayPoint: "87"
    }
  ]);
  function AddGame() {
    let theDateName = document.getElementById("date").value;
    let theHomeTeam = document.getElementById("Hometeam").value;

    let theHomePoint;
    document.getElementById("homepoint").value;

    let theAwayTeam;
    document.getElementById("awayteam").value;
    let theAwayPoint;
    document.getElementById("awaypoint").value;
    //const result = divValue.textContent.trim(); alert(result)
    document.getElementById("gameOutput").innerHTML =
      "The Date Name is " +
      theDateName +
      ".<br> HomeTeam " +
      theHomeTeam +
      ".<br> Home Point " +
      theHomePoint +
      ".<br>Away Team" +
      theAwayTeam +
      ".<br> AwayPoint" +
      theAwayPoint +
      ".";
  }
  //Following codes are for  Movies

  document.getElementById("DateButton").addEventListener("click", DateFunction);

  function DateFunction() {
    let theDateseason = document.getElementById("games").value;

    let thequarter = "";
    for (let i = 0; i < theDateseason; i++) {
      for (let j = 0; j <= i; j++) {
        thequarter = thequarter + "*";
      }
      thequarter = thequarter + "<br>";
      document.getElementById("dateOutput").innerHTML = thequarter;
    }
    thequarter = "";
  }

  function AddGame() {
    var arrDate = newArray();
    var arrHomeTeam = newArray();
    var arrAwayTeam = newArray();
    var arrHomePoint = newArray();
    var arrAwayPoint = newArray();
  }
    function AddGame() {
      var arrDate = document.getElementById("date").innerHTML;
      var arrHomeTeam = document.getElementById("Hometeam").innerHTML;
      var arrAwayTeam = document.getElementById("AwayTeam").innerHTML;
      var arrHomePoint = document.getElementById("HomePoint").innerHTML;
      var arrAwayPoint = document.getElementById("awaypoint").innerHTML;    
      }
      document.getElementById("date").value = "";
      document.getElementById("Hometeam").value = "";
      document.getElementById("awayteam").value = "";
      document.getElementById("homepoint").value = "";
      document.getElementById("awaypoint").value = "";
    }

    function AddGame() {
      var content = "<b>Data Entered by User :</b><br>";
      content += [...arrDate] + "</br>";
      content += [...arrHomeTeam] + "</br>";
      content += [...arrAwayTeam] + "</br>";
      content += [...arrHomePoint] + "</br>";
      content += [...arrAwayPoint] + "</br>";
    }
    function AddGame() {
      document.getElementById("gameOutput").innerHTML = content;
      arrDate = arrArray();
      arrHomeTeam = arrArray();
      arrHomePoint = arrArray();
      arrAwayTeam = arrArray();
      arrAwayPoint = arrArray();
    }
    var content = "<b> Games Entered by User</b><br>";
    document.getElementById("gameOutput").innerHTML = content;
  }
  function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function addTable() {

/* Find a <table> element with id="myTable":*/
var table = document.getElementById("myTable");

/* Create an empty <tr> element and add it to the 1st position of the table:*/
var row = table.insertRow(1);

/*sert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:*/
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
/* Add some text to the new cells:*/
cell1.innerHTML = document.getElementById("firstname").value;
cell2.innerHTML = document.getElementById("lastname").value;
  
 /* alert("cell2:  "+cell2.innerHTML);*/
  cell3.innerHTML = document.getElementById("grade").value;
}
  
function resetTable() {

/* Find a <table> element with id="myTable":*/
var table = document.getElementById("myTable");

/* Add some text to the new cells:*/
 document.getElementById("firstname").value='';
 document.getElementById("lastname").value='';
document.getElementById("grade").value='';
}
  
}

