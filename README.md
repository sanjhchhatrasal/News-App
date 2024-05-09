

```
# News App

This is a React-based web application for reading news articles from various sources. The app fetches data from the News API and displays articles based on user preferences and search queries.

## Features

- View top headlines from different news sources.
- Filter news articles by category (e.g., business, technology, sports).
- Search for specific news articles using keywords.
- Save favorite articles for later reading.
- Responsive design for optimal viewing on all devices.

## Technologies Used

- React: Frontend framework for building user interfaces.
- Axios: HTTP client for making API requests.
- React Router: Library for routing within a React application.
- Local Storage: For saving and retrieving favorite articles.
- News API: External API for fetching news data.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/sanjhchhatrasal/News-App.git
```

2. Navigate to the project directory:

```
cd News-App
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file in the root directory and add your News API key:

```
REACT_APP_NEWS_API_KEY=https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57d8894d4edd444c95cbbd3a1955230e&page=${this.state.page+1}&pageSize=${this.props.pageSize}
```

5. Start the development server:

```
npm start
```

6. Open your browser and go to `http://localhost:3000` to view the app.



## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
```

