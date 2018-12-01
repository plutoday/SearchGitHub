/*comment
 var msg = "Hello javascript";
 console.log(msg);

 var resultsDiv = document.getElementById("results");
 resultsDiv.innerHTML = "<p>This is from javascript </p>";
 console.log("msg type is "+ typeof(msg));
 console.log("resultsDiv type is " + typeof(resultsDiv));

 var number = 10;
 var none;
 if(!number){
   console.log("none is undefined")
 }
 if(!none){
   console.log("none is undefined")
 }
 */


/*
for (var x =0;x<results.length;x++){
var result = results[x];
if(result.score>4) continue;
console.log(result.name);

}
*/



 $(document).ready(function(){




"use strict";

var resultList = $("#resultList");

resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click",function(){
  resultList.toggle(500);

  if(toggleButton.text()=="Hide"){
    toggleButton.text("Show");
  }else
  toggleButton.text("Hide");
})
var listItems = $("header nav li").css("font-weight", "bold");
listItems.filter(":first").css("font-size","18px");
//listItems.css("font-weight", "bold");
//listItems.css("font-size", "18px");

$("#gitHubSearchForm").on("submit",function(){

  var SearhPhrase = $("#SearhPhrase").val();
  var Userstars =$("#Userstars").val();
  var LaguageChoice =$("#LaguageChoice").val();

  resultList.text("Performing search...")

  var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(SearhPhrase);
  if (LaguageChoice!="All"){
    gitHubSearch+="+language:"+ encodeURIComponent(LaguageChoice);
  }
  if (Userstars){
    gitHubSearch+="&sort=stars";
  }

  $.get(gitHubSearch)
  .done(function(r){
  //console.log(r.items.length);
   displayResults(r.items);

  })
  .fail(function(err){
    console.log("failed to query github");
  });

  return false;
});




/*
var results = [{
  name:"jQuery",
  language:"Javascript",
  score:4.5,
  showLog:function(){

  },
  owner:{
    login:"shawnwildermuth",
    id:123456
  }
},{
  name:"jQuery UI",
  language:"Javascript",
  score:3.5,
  showLog:function(){

  },
  owner:{
    login:"shawnwildermuth",
    id:123456
  }
}]
*/





// fast version loop
function displayResults(results){
resultList.empty();
$.each(results,function(i,item){
var newResult = $("<div class='result'>"+
"<div class='title'>"+item.name+"</div>"+
"<div>Language "+item.language+"</div>"+
"<div>Owner: "+item.owner.login+"</div>"+"</div>");


newResult.hover(function(){
  //make it darker
  $(this).css("background-color", "lightgrey");
},function(){
  //reverse
  $(this).css("background-color", "transparent");
});


resultList.append(newResult);

 });
}




 });
