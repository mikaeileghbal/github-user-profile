import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span>Built with</span>
        <ul className="footer_list">
          <li className="footer_list_item">
            <a className="footer_link" href="https://reactjs.org">
              react.js
            </a>
          </li>
          <li className="footer_list_item">
            <a className="footer_link" href="https://react-chartjs-2.js.org">
              react-chartjs-2
            </a>
          </li>
          <li className="footer_list_item">
            <a className="footer_link" href="https://api.github.com">
              gitHub api
            </a>
          </li>
        </ul>
        <span>and more!</span>
      </div>
    </footer>
  );
}
