// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

$(function() {
  $(".jumper").on("click", function(event) {
      
    event.preventDefault();

    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);    
  });

  // $(".project").hover(function() {
  //   let overlay = `#overlay-${$(this).data("overlay")}`;
  //   console.log(overlay);
  //   console.log(`${overlay}`)
  //   $(`${overlay}`).removeClass("hide");
  // },
  //   function() {
  //     let overlay = `#overlay-${$(this).data("overlay")}`;
  //     console.log(overlay);
  //     $(`${overlay}`).addClass("hide");
  // })
})