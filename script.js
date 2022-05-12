
$("document").ready(function(){
     $("#main img").click(function(){
          var name = $(this).attr("src");
          $("#view-img").attr("src", name);
          $("#background").fadeIn(800);
          $("#view-img").fadeIn(1000);
          $("#close").fadeIn(1000);
     });

     $("#close").click(function(){
          $("#background").fadeOut();
          $("#view-img").fadeOut();
          $("#close").fadeOut();
     });
});