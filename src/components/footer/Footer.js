import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span>Built with</span>
        <ul className="footer_list">
          <li className="footer_list_item">
            <a className="footer_link" href="#">
              React.js
            </a>
          </li>
          <li className="footer_list_item">
            <a className="footer_link" href="#">
              Chart.js
            </a>
          </li>
          <li className="footer_list_item">
            <a className="footer_link" href="#">
              GitHub Api
            </a>
          </li>
          <li className="footer_list_item">
            <a className="footer_link" href="#">
              Styled Components
            </a>
          </li>
        </ul>
        <span>and more!</span>
      </div>
    </footer>
  );
}
