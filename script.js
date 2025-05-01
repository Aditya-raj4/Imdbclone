// script.js
const API_KEY = 'bdd13ea8';

async function searchMovies() {
  const query = document.getElementById('searchInput').value;
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const container = document.getElementById('moviesContainer');
  container.innerHTML = ''; // Clear old results

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300'}" alt="${movie.Title}" />
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      `;
      container.appendChild(movieCard);
    });
  } else {
    container.innerHTML = `<p>No results found.</p>`;
  }
}
