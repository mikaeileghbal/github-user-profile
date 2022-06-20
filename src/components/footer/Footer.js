import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>
          Built with
          <ul className="footer_list">
            <li className="footer_list_item">
              <a className="footer_link" href="#">
                React.js
              </a>
            </li>
            <li className="footer_list_item">
              <a className="footer_link" href="#">
                GitHub Api
              </a>
            </li>
            <li className="footer_list_item">
              <a className="footer_link" href="#">
                React.js
              </a>
            </li>
          </ul>
          and more!
        </p>
      </div>
    </footer>
  );
}
