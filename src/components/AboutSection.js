import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left image area */}
        <div className="about-image">
          <img
            src="/images/ceo.avif" // replace with your image path
            alt="CEO"
          />
          <div className="decor-top"></div>
          <div className="decor-bottom"></div>
        </div>

        {/* Right text area */}
        <div className="about-text">
          <div className="arrows">⮜⮜⮜⮜⮜</div>
          <h2>A STORY OF GROWTH PURPOSE & SUSTAINABILITY</h2>
          <p>CHECK OUT OUR VIDEO, TO GET INSPIRED</p>
          <a
             href="https://youtu.be/ilYYP7IjT3I?si=DYBlZh1S7G5kqRfu"
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View
          </a>
        </div>
      </div>

      {/* Additional Content Below */}
      <div className="brand-journey">
        <h3>OUR <span>BRAND JOURNEY</span></h3>
        <p>
          Our Company was initially formed as a partnership firm as “M.M.D. Dairy” at Erode, Tamil Nadu under the Indian Partnership Act, 1932, on February 1, 1999. The name of the partnership firm was changed to “Milky Mist Dairy Food” on August 2, 2006. The partnership firm was subsequently converted and registered as a private limited company under the Companies Act, 2013 under the name ‘Milky Mist Dairy Food Private Limited’ on July 10, 2014, under the Companies Act, 2013.
        </p>
        <p>
          We became a public limited company on May 26, 2025, and received a fresh certificate of incorporation on May 26, 2025. Mr. Sathishkumar T, Chairman and Managing Director, and Ms. Anitha S, Whole Time Director are the Promoters of the Company. Over the years, we have diversified our product categories to include various value-added dairy products, such as cheese, paneer, butter, curd, ghee, yogurt, ice cream, ultra-high temperature (“UHT”) products, and other products, including frozen foods, ready-to-eat (“RTE”) and ready-to-cook (“RTC”) products, as well as chocolates. We offer our products under multiple brands, including ‘Milky Mist’, ‘SmartChef’, ‘Capella’, and ‘Misty Lite’, and have recently acquired brands such as ‘Briyas’ and ‘Asal’.
        </p>
      </div>

      <div className="legacy">
        <h3>OUR LEGACY OVER <span>26 YEARS</span></h3>
      </div>
    </section>
  );
}
