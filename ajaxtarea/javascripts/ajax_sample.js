let number = 0;
let data = null;
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
function getData() {
  if (!data) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        data = request.response; 
        actualizarcontenido();
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send();
  } else {
    actualizarcontenido();
  }
}
function actualizarcontenido() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = (number + 1) % data.length; 
}
function changeVideo() {
  button.addEventListener('click', function() {
    getData();
  });
}
window.onload = changeVideo;