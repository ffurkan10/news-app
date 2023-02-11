import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import axios from "axios";
import "./styles/style.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";

function App() {
  const [news, setNews] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=tr&category=${selectedCategory}&apiKey=31eeec8f8f4948178452985145b73ad3`
      );
      setProducts(response.data.articles.slice(0, 3));
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=tr&category=${selectedCategory}&apiKey=31eeec8f8f4948178452985145b73ad3`
      );
      setNews(response.data.articles.slice(3, 21));
    };
    fetchData();
  }, [selectedCategory]);

  const filteredNews = news.filter((newsItem) => {
    return (
      newsItem.description &&
      newsItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Router>
      <div className="App">
        <header>
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="App__list">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  filteredNews={filteredNews}
                  products={products}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
