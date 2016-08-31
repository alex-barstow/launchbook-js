// Exercise: Find the top navbar by query for the element type, which is <nav>.
var topNav = document.getElementsByTagName("nav")[0];

// Exercise: Find the sidebar on the right by using it's id.
var sideBar = document.getElementById("sidebar-right");

// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
var pages = document.getElementsByClassName("pages");
var groups = document.getElementsByClassName("groups");

// Exercise: Find all of the comments on the page.
var panels = document.getElementsByClassName("panel");

// Exercise: Find the first comment on the page.
var firstComment = panels[0];

// Exercise: Find the last comment on the page.
var lastComment = panels[panels.length - 1];

// Exercise: Find the fourth comment on the page.
var nthComment = function(n) {
  return panels[n - 1];
}

// Exercise: Find one of the ads in the sidebar and hide them.
var adSlot1 = document.getElementsByClassName("ad-slot")[0];
adSlot1.style.visibility = "hidden";

// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var statusUpdateForm = document.getElementsByClassName("status-update")[0];
statusUpdateForm.style.visibility = "hidden";
statusUpdateForm.style.visibility = "visible";

// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var adSlot2Image = document.getElementsByClassName("ad-slot")[1].getElementsByTagName("img")[0];
adSlot2Image.setAttribute("src", "http://placebear.com/200/300");

// Exercise: Find Sam's post and change it's text to something incredible.
var changePost = function(posterName) {
  var postBody = document.getElementsByClassName("post")
  for(var i = 0; i < postBody.length; i++) {
    var mediaBody = postBody[i].getElementsByClassName("media-body");
    var mediaBodyH4 = mediaBody[0].getElementsByTagName("h4")[0];
    var mediaBodyP = mediaBody[0].getElementsByTagName("p")[0];
    if(mediaBodyH4.innerHTML == posterName) {
      mediaBodyP.innerHTML = "OMG PLEASE WORK";
    }
  }
}
changePost("Sam McTaggart")

// Exercise: Find the first post and add the .post-liked class to it.
var addClass = function(postNumber, elementClass, htmlClass) {
  var postBody = document.getElementsByClassName(elementClass)
  for(var i = 0; i < postBody.length; i++) {
    if (i == postNumber - 1) {
      postBody[i].className = postBody[i].className + " " + htmlClass
    }
  }
}
addClass(1, "post", "post-liked")

// Exercise: Find the second post and remove the .post-liked class.
var removeClass = function(postNumber, elementClass, htmlClass) {
  var postBody = document.getElementsByClassName(elementClass)
  for(var i = 0; i < postBody.length; i++) {
    if (i == postNumber - 1) {
      postBody[i].classList.remove(htmlClass);
    }
  }
}
removeClass(2, "post", "post-liked")
