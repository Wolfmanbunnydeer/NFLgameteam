//Following codes are for Games
function myFunction() {
  document.getElementById("GameButton").addEventListener("click", myFunction);
}
// create NFL = document.createElement('result').innerHTML;
function onloadData(){
}
var temp = document.querySelector('.date');
  var Hometeambutton = document.querySelector(."Hometeam");
  var awayteam = document.querySelector(".awayteam");
  var homepoint = document.querySelector(".homepoint");
  var awaypointDiv = document.querySelector(".awaypoint");

 
  function myFunction() {
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

  document.getElementById("gameButton").addEventListener("click", DateFunction);

  function DateFunction() {
    let theDateseason = document.getElementById("games").value;

    let thequarter = "";
    for (let i = 0; i < theDateseason; i++) {
      for (let j = 0; j <= i; j++) {
        thequarter = thequarter + "*";
      }
      thequarter = thequarter + "<br>";
      document.getElementById("gameOutput").innerHTML = thequarter;
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


 
function resetTable() {

/* Find a <table> element with id="myTable":*/
var table = document.getElementById("myTable");

/* Add some text to the new cells:*/
 document.getElementById("date").value='';
 document.getElementById("HomeTeam").value='';
document.getElementById("homepoint").value='';
  document.getElementById("awayteam").value='';
document.getElementById("awaypoint").value='';  
  
}


// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");

var i;

for (i = 0; i < myNodelist.length; i++) {

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  myNodelist[i].appendChild(span);

}

 

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("flex-container");

var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

 

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

  }

}, false);

 

// Create a new list item when clicking on the "Add" button

function newElement() {

  var li = document.createElement("li");

  var inputValue = document.getElementById("item").value;

  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {

    alert("This field cannot be empty!");

  } else {

    document.getElementById("list").appendChild(li);

  }

  document.getElementById("item").value = "";

 

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  li.appendChild(span);

 

  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";

$(document).ready(function(){
  var submitBtn = $('#submit-btn');
  var inputs = $('.info');
  var result = $('#result');
  var dataHolder = {};
  
  submitBtn.click(function(e){
    console.log(e); // Details about the event from clicking the button 
    e.preventDefault(); // prevent the default behaviour of the button
    $(inputs).each(function(i) {
      console.log('All inputs in the form', $(this)); 
      // $(this) refers to all of the inputs having the info Class.
      // Knowing that, we could easally get their values or ther
      // name attributes in order to create a meaningful and descriptive
      // Object with the data
      
      console.log('The number if itterations', i);
      // Knowing the number of ittereations(the number of inputs)
      // We could assign i to be equal to the inputs name attribute.
      // By doing that we can use i to assign the object key names,
      // otherwise it would be 0: 1: 2: 3:
      
      i = $(this).attr('name'); // Assign i to the inputs name attributes
      console.log('i is now changed to: ', i);
      
      // Add the value to the object
      dataHolder[i] = $(this).val();
    });
    
    // Now we need to output the result into the DOM result container
    // We can do that by looping trough our dataHolder object
    
    for(var k in dataHolder) {
      if(dataHolder.hasOwnProperty(k)) {
        console.log('value of k ', k) // k is actually the key in the object
        result.append('<p>' + k + ' : ' + dataHolder[k] + '</p>'); // Append the data in the result container
      }
    }
  });
});
      
      

    }

  }

}


