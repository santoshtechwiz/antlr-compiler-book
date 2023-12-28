// ScrollRevealExample.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./Book.css"; // Create a separate CSS file for styling

// @ts-ignore
import Intro from "./intro.md";
// @ts-ignore
import Chapter1 from "./chapter1.md";
// @ts-ignore
import Chapter2 from "./chapter2.md";

const Chapter = ({ title, content }) => (
  <section className="book-chapter" data-aos="fade-up">
    <h2 className="title">{title}</h2>
    <div
      className="stackedit"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
);

const Book = () => {
  const [introContent, setIntroContent] = useState("");
  const [chapter, setChapter] = useState("");
  const [chapter1, setChapter1] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Fetch content from intro.md
    fetch(Intro)
      .then((response) => response.text())
      .then((data) => setIntroContent(data))
      .catch((error) => console.error("Error fetching intro.md:", error));
    fetch(Chapter1)
      .then((response) => response.text())
      .then((data) => setChapter(data))
      .catch((error) => console.error("Error fetching chapter1.md:", error));
    fetch(Chapter2)
      .then((response) => response.text())
      .then((data) => setChapter1(data))
      .catch((error) => console.error("Error fetching chapter2.md:", error));
  }, []);

  return (
    <Router>
      <div className="book-container">
        <nav className="book-nav">
          <NavLink to="/">Introduction</NavLink>
          <NavLink to="/chapter1">Chapter 1</NavLink>
          <NavLink to="/chapter2">Chapter 2</NavLink>
        </nav>
        <div className="book-content">
          <Routes>
            <Route
              path="/"
              element={<Chapter title="Introduction" content={introContent} />}
            />
            <Route
              path="/chapter1"
              element={<Chapter title="Chapter 1" content={chapter} />}
            />
            <Route
              path="/chapter2"
              element={<Chapter title="Chapter 2" content={chapter1} />}
            />
          </Routes>
        </div>
      </div>
      <section className="book-buy" data-aos="fade-up">
        <button>Buy Now</button>
      </section>
    </Router>
  );
};

export default Book;
