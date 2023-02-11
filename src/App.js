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
  const [selectedCategory, setSelectedCategory] = useState("top");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_1696371878d1ebbba7429374cf7e4591e3f22&language=tr&category=${selectedCategory}`
      );
      console.log(response.data);
      setProducts(response.data.results.slice(0, 3));
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_1696371878d1ebbba7429374cf7e4591e3f22&language=tr&category=${selectedCategory}`
      );
      setNews(response.data.results.slice(0, 20));
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
