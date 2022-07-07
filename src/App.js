import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // function to handle submite
  const handleSubmit = (e) => {
    e.preventDefault();
    // here we converting text into number
    let amout = parseInt(count);

    // this if should be above "setText"
    if (amout < 0) {
      amout = 1;
    }
    // this way we can ограничть how many data that we get
    setText(data.slice(0, amout));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum ?</h3>
      {/*  form is used to collect user input. An <inp ut> element can be displayed in many ways, depending on the type attribute. */}
      <form className="lorem-form" onSubmit={handleSubmit}>
        {/* The <label> tag defines a label for many form elements. */}
        {/* The for attribute of the <label> tag should be equal to the id attribute of the <input> element to bind them together. */}
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          // this is how we can get value from "input" text
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

// // this way we can ограничть how many data that we get
// setText(data.slice(0, amout));

// here we converting text into number
// let amout = parseInt(count);
