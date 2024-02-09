import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const [text] = useTypewriter({
    words: ["Finnley Grange!", "A Software Engineer."],
    loop: 0,
  });

  return (
    <div className="header container d-flex flex-column align-items-center justify-content-center">
      <div className="title">
        <h1>
          <span className="intro">Hi, I am</span>
          <br />
          <span className="name">
            {text}
            <Cursor cursorColor="#6ea8fe" />
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
