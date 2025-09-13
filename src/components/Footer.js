import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h2>MilkyMist</h2>
        <div className="footer-links">
          <Link to="/">Online Store</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Reach Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/milkymistdairy/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/milkymistdairy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.youtube.com/c/milkymistindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/milkymistdairy/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="copyright">
        © Copyright 2024. All Rights Reserved
      </div>
    </footer>
  );
}
