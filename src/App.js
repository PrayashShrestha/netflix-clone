import React from "react";
import "./App.css";
import Row from "./components/row/Row";
import requests from "./requests/requests";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <div className="app">
      {/* header */}
      {/* banner */}
      {/* movie rows */}

      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow
      />
      {/* isLargeRow budefault is true is a userdefined  */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Commedy Movies" fetchUrl={requests.fetchCommedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
