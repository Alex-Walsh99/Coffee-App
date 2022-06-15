const baseURL = 'https://api.sampleapis.com/coffee/hot';
const outputOL = document.getElementById("coffee-list");


let liHtml = "";

fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

function displayData(data) {
  data.map(function(coffee){
    liHtml += `
    <ol class="coffee-list-item">
       <li class="coffee-list-entity">
          <h2 class="coffee-item">
            ${coffee['title']}
          </h2>
          <div class="coffee-item">
          ${coffee['description']}
          </div>
        </li>
    </ol>`;
    outputOL.innerHTML = liHtml;
  })
}