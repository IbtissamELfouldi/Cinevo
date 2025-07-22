import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm";

const form = document.querySelector(".form_class");
const inputTitle = document.getElementById("title");
const inputYear = document.getElementById("year");

const apiKey = "e239a5bf";
const baseUrl = "https://www.omdbapi.com/";

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const title = inputTitle.value.trim();
    const year = inputYear.value.trim();

    if (!title) {
        alert("Please enter a movie title.");
    return;
    }
    
    try {
    const response = await axios.get(baseUrl, {
        params: {
        apikey: apiKey,
        s: title,
        y: year || undefined, // facultatif
        },
    });

    const movies = response.data.Search;

    displayResults(movies);
    } catch (error) {
    
        console.error("Error fetching data:", error);
        alert("No results found or an error occurred.");
    }
    });

function displayResults(movies) {
    const existingResults = document.querySelector("#results");
    if (existingResults) existingResults.remove();

    const container = document.createElement("div");
    container.id = "results";
    container.style.marginTop = "2rem";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit, minmax(180px, 1fr))";
    container.style.gap = "1rem";

    if (!movies) {
    container.innerHTML = "<p>No results found.</p>";
    } else {
        movies.forEach((movie) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "1rem";
        card.style.background = "#f5f5f5";
        card.style.borderRadius = "8px";
        card.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}" style="width: 100%; border-radius: 4px;">
        <h3 style="margin: 0.5rem 0 0.2rem;">${movie.Title}</h3>
        <p>${movie.Year}</p>
    `;
    container.appendChild(card);
    });
    }
    
    document.querySelector("main").appendChild(container);
}
