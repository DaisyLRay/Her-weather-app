function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-bar");
   let cityElement = document.querySelector("#weather-app-city");
   cityElement.innerHTML = searchInput.value;

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

