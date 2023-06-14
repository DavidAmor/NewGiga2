async function loadAJAX(){
    const response = await fetch('./pagePart.js');
    const pagePart = await response.text();
    const content = document.getElementById("content");
    content.innerHTML = pagePart;
}

loadAJAX();    