$(document).ready(
  function(){
    $("#leway").on("input",
      function(){
        $("#lewaytime").html($("#leway").attr("value"))
        console.log("hi")
      }

    )
  }
)
