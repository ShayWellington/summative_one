console.log('my script is working');

$( document ).ready(function() {
    console.log( "ready!" );

    function myFunction() {
      var x = document.getElementById("indexToggle");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
        
    }

  }
});
