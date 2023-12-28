// ScrollRevealExample.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div className="stackedit" dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

const Book = () => {
  const [introContent, setIntroContent] = useState("");
  const [chapter, setchapter] = useState("");
  const [chapter1, setchapter1] = useState("");

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
      .then((data) => setchapter(data))
      .catch((error) => console.error("Error fetching intro.md:", error));
      fetch(Chapter2)
      .then((response) => response.text())
      .then((data) => setchapter1(data))
      .catch((error) => console.error("Error fetching intro.md:", error));
  }, []);

  return (
    <div>
      <Chapter title="" content={introContent}></Chapter>
      <Chapter title="Chapter 1" content={chapter}></Chapter>
      <Chapter title="Chapter 2" content={chapter1}></Chapter>
      <section className="book-buy" data-aos="fade-up">
        <button>Buy Now</button>
      </section>
    </div>
  );
};

export default Book;
