import React from "react";

function Header() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div>
        <h1>
          Hi, I am <br />
          <span className="name">Finnley Grange</span>
        </h1>
        <hr></hr>
        <p>A Software Engineer</p>
      </div>
    </div>
  );
}

export default Header;
