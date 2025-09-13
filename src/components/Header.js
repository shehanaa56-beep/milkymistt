import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <h1>MilkyMist</h1>
        <nav>
          <Link to="/">Home</Link>

          {/* Products Dropdown */}
          <div className="dropdown">
            {/* Main Products Link */}
            <Link to="/products" className="dropbtn">
              Products
            </Link>

            <div className="dropdown-content">
              <Link to="/products/chocolate">Chocolate</Link>
              <Link to="/products/ice-cream">Ice Cream</Link>
              <Link to="/products/paneer">Paneer</Link>
              <Link to="/products/butter">Butter</Link>
              <Link to="/products/curd">Curd</Link>
              <Link to="/products/cheese">Cheese</Link>
              <Link to="/products/smartchef">Smartchef</Link>
              <Link to="/products/asal">Asal</Link>
              <Link to="/products/ghee">Ghee</Link>
              <Link to="/products/fruit-yogurt">Fruit Yogurt</Link>
              <Link to="/products/uht">UHT</Link>
              <Link to="/products/ready-to-drink">Ready To Drink</Link>
              <Link to="/products/desserts">Desserts</Link>
              <Link to="/products/food-enhancers">Food Enhancers</Link>
              <Link to="/products/condensed-milk">Condensed Milk</Link>
            </div>
          </div>
          {/* End Products Dropdown */}

          <Link to="/brochure">Brochure</Link>
          <Link to="/nutrition">Nutrition & Blogs</Link>
          <Link to="/parlour">Parlour</Link>
          <Link to="/about">About Us</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/contact">Contact Us</Link>

          {/* Buy Now Button that navigates to checkout */}
          <Link to="/checkout" className="buy-btn">Buy Now</Link>

        </nav>
      </div>
    </header>
  );
}

