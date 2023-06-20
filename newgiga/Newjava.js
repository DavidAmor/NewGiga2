const NUM_RESULTS = 5;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/videojuegos?from=${from}&to=${to}`);

    const newVideojuegos = await response.text();
  
    const videojuegosDiv = document.getElementById("content");

    videojuegosDiv.innerHTML += newVideojuegos;

    loadMoreRequests++;
}