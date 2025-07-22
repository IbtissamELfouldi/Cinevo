# 🎬 Cinévo – Film Search Application

**Cinévo** is a simple, elegant, and responsive front-end web application that allows users to search for movies in real-time using the public [OMDb API](https://www.omdbapi.com/). Built with **HTML**, **CSS**, and **JavaScript**, it offers a smooth user experience with search results displayed as movie cards.

---

## Features

- Search for movies by keyword (e.g., “Batman”, “Inception”)
- Real-time API request using [OMDb API](https://www.omdbapi.com/)
- Display results as movie cards containing:
  - Movie poster
  - Title
  - Release year
- Responsive UI with clean, minimal design
- Uses lightweight **Axios** library for API calls

---

## Live Demo

▶[Try it now on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-vtcapxe6?file=index.html,styles.css,package.json)

---

## Technologies Used

- HTML5
- CSS3 (with responsive layout)
- JavaScript (ES6+)
- [Axios](https://axios-http.com/) – HTTP client
- [OMDb API](https://www.omdbapi.com/) – Open Movie Database

---

## How It Works

1. The user enters a **keyword** in the search input.
2. A GET request is sent to the OMDb API using the following format:

   ```
   https://www.omdbapi.com/?s=your_keyword&apikey=YOUR_API_KEY
   ```

3. The API returns a list of matching movies.
4. The results are dynamically rendered as movie cards showing:
   - Poster
   - Title
   - Release Year

---

## API Key

To use the OMDb API:

- Get your **free API key** [here](https://www.omdbapi.com/apikey.aspx)
- Or use this demo key (limited usage):  
  `4943dda3`

---

## Project Structure

```
.
├── index.html       # HTML structure
├── styles.css       # Styling and responsiveness
├── script.js        # API requests and DOM manipulation
└── package.json     # StackBlitz config (optional)
```

---

## Installation (Optional for Local Use)

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/cinevo.git
   cd cinevo
   ```

2. Open `index.html` directly in your browser.

   > No build step or server setup required.

---

## Screenshots

<!-- You can add screenshots here by uploading them to the repo and linking like below: -->
<!-- ![Screenshot](./screenshots/demo.png) -->

---

## Contributing

Contributions are welcome! Feel free to:

- Fork this repo
- Improve features or styling
- Submit a pull request

---

## License

This project is licensed under the **MIT License**.

---

## Author

Made by **EL FOULDI Ibtissam**  
[GitHub](https://github.com/IbtissamELfouldi) • [LinkedIn](https://linkedin.com/in/ibtissam-el-fouldi-ab061120a)

---

> Enjoy building with Cinévo!
