// ScrollRevealExample.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom"; // Change BrowserRouter to HashRouter
import "./Book.css"; // Create a separate CSS file for styling

// @ts-ignore
import Introduction from "./intro.md";
// @ts-ignore
import Chapter1 from "./chapter1.md";
// @ts-ignore
import Chapter2 from "./chapter2.md";
// @ts-ignore
import Chapter3 from "./chapter3.md";

const Chapter = ({ title, content }) => (
  <section className="book-chapter" data-aos="fade-up">
    <h2 className="title">{title}</h2>
    <div className="stackedit" dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

const Book = () => {
  const [introContent, setIntroContent] = useState("");
  const [chapter1, setChapter1] = useState("");
  const [chapter2, setChapter2] = useState("");
  const [chapter3, setChapter3] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Fetch content from intro.md
    fetch(Introduction)
      .then((response) => response.text())
      .then((data) => setIntroContent(data))
      .catch((error) => console.error("Error fetching intro.md:", error));
    fetch(Chapter1)
      .then((response) => response.text())
      .then((data) => setChapter1(data))
      .catch((error) => console.error("Error fetching chapter1.md:", error));
    fetch(Chapter2)
      .then((response) => response.text())
      .then((data) => setChapter2(data))
      .catch((error) => console.error("Error fetching chapter2.md:", error));
      fetch(Chapter3)
      .then((response) => response.text())
      .then((data) => setChapter3(data))
      .catch((error) => console.error("Error fetching chapter2.md:", error));
  }, []);

  return (
    <Router basename="/">
      <div className="book-container">
        <nav className="book-nav">
         
          <NavLink to="/">Introduction</NavLink>
          <NavLink to="/chapter1">Chapter 1</NavLink>
          <NavLink to="/chapter2">Chapter 2</NavLink>
          <NavLink to="/chapter3">Chapter 3</NavLink>
          <div className="buy-section">
            <button className="buy-button">Buy Now</button>
            <p className="price">$19.99</p>
          </div>
        </nav>

        <div className="book-content">
          <Routes>
            <Route
              path="/"
              element={<Chapter title="" content={introContent} />}
            />
            <Route
              path="/chapter1"
              element={<Chapter title="Chapter 1" content={chapter1} />}
            />
            <Route
              path="/chapter2"
              element={<Chapter title="Chapter 2" content={chapter2} />}
            />
              <Route
              path="/chapter3"
              element={<Chapter title="Chapter 3" content={chapter3} />}
            />
          </Routes>
        </div>
      </div>
    
    </Router>
  );
};

export default Book;
