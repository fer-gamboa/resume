function updateElements(widget) {
  // Get the H1 title
  var h1 = widget.getElementsByTagName("h1")[0];
  h1.classList.add("mt-0");
  
  // Change classes
  var insideDiv = widget.getElementsByClassName("col-12 col-lg-4 section-heading")[0];
  insideDiv.classList.add("center-text");
  insideDiv.classList.remove("col-12", "col-lg-4", "section-heading");
  
  var outsideDiv = widget.getElementsByClassName("row")[0];
  outsideDiv.classList.add("margin-auto");
  outsideDiv.classList.remove("row");
  
  var postsCont = widget.getElementsByClassName("col-12 col-lg-8")[0];
  postsCont.classList.add("row", "isotope", "projects-container", "js-layout-masonry");
  postsCont.classList.remove("col-12", "col-lg-8");
  
  
  MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@fergamboa_","postsPerLine":2,"limit":4,"picture":"none","fields":["description","author","claps","publishAt"],"ratio":"square"}})
}



function addStyle() {
  // Get the object of the posts
  var posts = document.getElementById("posts");
  var contact = document.getElementById("contact");
  
  // Update the widgets
  updateElements(posts);
  updateElements(contact);
}



// Call the function when loading the site.
window.onload = addStyle;