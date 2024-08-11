# 🎥 Filmfuze

**Filmfuze** is a movie management application that lets you search for movies, manage your personal movie list, and view detailed information about each film. Built with modern web technologies, Filmfuze is designed to help movie enthusiasts keep track of their favorite films with ease.

## 📸 Screenshots

1. **Homepage**
   ![Homepage Screenshot](/src/assets/Home_Page.PNG) 
2. **Movie List**
   ![Movie List Screenshot](/src/assets/Movie_List.PNG) 
3. **Movie Details**
   ![Movie Details Screenshot](/src/assets/Movie_Details.PNG) 

## 🌟 Features

- 🔍 **Search Movies**: Find movies by title and view suggestions in real-time.
- 🗂️ **Manage Your List**: Easily add and remove movies from your personal collection.
- 📜 **Detailed View**: Dive into detailed information about each movie, including plot, ratings, and cast.

## 🛠️ Technologies Used

- ⚛️ **React** : For building a dynamic and responsive user interface.
- 🔄 **Redux** : To manage and centralize application state.
- 💅 **Bootstrap** : For a responsive and modern design.
- 🛣️ **React Router** : To handle routing and navigation between different views.
- 🔧 **Redux Thunk** : For managing asynchronous actions.
- 🎬 **OMDB API** : Provides movie data for search and detailed information.

## 🚀 Installation

Follow these steps to get Filmfuze up and running on your local machine:

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/aniketrchate/Filmfuze.git
   ```
2. **Navigate into the Project Directory**:

   ```sh
   cd Filmfuze
   ```
3. **Install Dependencies**:

   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:

   ```sh
   npm install
   ```
4. **Configure the OMDB API Key**:

   The application uses the OMDB API to fetch movie data. You need to provide your own API key in src/redux/actions/movieActions.js :

   ```plaintext
   const API_KEY = 'your_omdb_api_key_here';
   ```
5. **Start the Development Server**:

   ```sh
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
