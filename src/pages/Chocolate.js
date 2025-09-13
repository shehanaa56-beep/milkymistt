import React from 'react';

export default function Chocolate() {
  return (
    <div>
      {/* First section: text left, images right */}
      <div className="chocolate-section">
        <div className="content">
          <h1>Milk Chocolate</h1>
          <p>
            Deliver into the exquisite symphony of flavors of our Milk Chocolate,
            meticulously crafted from select cocoa beans and milk solids. Experience
            a sensory journey where each bite narrates tales of unparalleled flavor,
            premium ingredients, rich texture, and the pure joy of relishing life's sweetest moments.
          </p>

          <h3>Available in</h3>
          <div className="sizes">
            <button>40 g</button>
            <button>80 g</button>
            <button>125 g</button>
          </div>

          <h3>Buy Now</h3>
          <button className="buy-btn">
            <span role="img" aria-label="cart">🛒</span>
          </button>
        </div>

        <div className="images">
          <img src="/images/mi4.avif" alt="Milk Chocolate 4" />
          <img src="/images/mi1.avif" alt="Milk Chocolate 1" />
          <img src="/images/mi2.avif" alt="Milk Chocolate 3" />
          <img src="/images/mi3.avif" alt="Milk Chocolate 2" />

          <img src="/images/mi5.avif" alt="Milk Chocolate 5" />
        </div>
      </div>

      {/* Second section: images left, text right */}
      <div className="chocolate-section reverse">
        <div className="images">
<img src="/images/ch11.avif" alt="Milk Chocolate 1" />
          <img src="/images/ch33.avif" alt="Milk Chocolate 3" />
          <img src="/images/ch22.avif" alt="Milk Chocolate 2" />
          <img src="/images/CH1.avif" alt="Milk Chocolate 4" />
          <img src="/images/ch44.avif" alt="Milk Chocolate 5" />
        </div>

        <div className="content">
          <h1>Dark Chocolate 55%</h1>
          <p>
            Indulge in the rich, bold flavors of our Dark Chocolate, made from the finest cocoa
            beans to deliver a decadent taste experience. Perfect for chocolate lovers who crave
            intense flavors and smooth texture in every bite.
          </p>

          <h3>Available in</h3>
          <div className="sizes">
            <button>50 g</button>
            <button>100 g</button>
            <button>150 g</button>
          </div>

          <h3>Buy Now</h3>
          <button className="buy-btn">
            <span role="img" aria-label="cart">🛒</span>
          </button>
        </div>
      </div>
    </div>
  );
}
