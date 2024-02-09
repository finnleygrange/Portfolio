import React from "react";

function SocialLinks() {
  return (
    <div className="icons d-flex justify-content-center align-items-center">
      <a href="https://github.com/finnleygrange" title="Github" target="_blank">
        <i className="icon fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/finnleygrange/"
        title="LinkedIn"
        target="_blank"
      >
        <i className="icon fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UC4qtyutKxBjZu8Od91uaAjg"
        title="YouTube"
        target="_blank"
      >
        <i className="icon fa-brands fa-youtube"></i>
      </a>
      <a href="" target="_blank">
        <i className="icon fas fa-file-alt resume-icon" title="Resume"></i>
      </a>
    </div>
  );
}

export default SocialLinks;
