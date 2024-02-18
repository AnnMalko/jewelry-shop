import React, { useEffect, useState } from "react";
import LoaderPage from "./Loader/LoaderPage";

function About() {
  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {stateLoader && <LoaderPage />}
      <div className="welcome">
        <p className="about top">
          <span>Welcome to Shop</span>, a haven for those who appreciate the
          allure of minimalistic elegance. Our jewelry boutique is more than
          just an online store; it's a reflection of a timeless aesthetic, where
          each piece is a testament to the beauty found in simplicity.
        </p>
        <p className="about">
          <span> The Essence of Our Jewelry </span>
        </p>
        <p className="about">
          <span>At Shop</span>, we believe that true beauty lies in the subtlety
          of design. Our curated collection showcases a commitment to
          minimalism, offering you jewelry that is both sophisticated and
          versatile. Every piece is a celebration of clean lines, refined
          details, and a commitment to enduring style.{" "}
        </p>
        <p className="about">
          <span> Our Commitment to Quality </span>
        </p>
        <p className="about">
          <span>Craftsmanship</span> is at the heart of our philosophy. Each
          piece in our collection is meticulously crafted with precision and
          care, ensuring not only a stunning aesthetic but also unmatched
          quality and durability. We take pride in offering jewelry that becomes
          a cherished part of your everyday style.
        </p>
        <p className="about">
          <span> Elevate Your Style, Effortlessly </span>
        </p>
        <p className="about">
          From delicate necklaces that gracefully adorn your neckline to subtle
          earrings that add a touch of charm, our jewelry is designed to enhance
          your unique style effortlessly. Whether for a special occasion or a
          daily statement, <span>Shop</span> has the perfect piece for every
          moment.
        </p>
        <p className="about">
          <span> Worldwide Elegance, Delivered </span>
        </p>
        <p className="about last">
          Experience the joy of secure online shopping with our user-friendly
          platform, and enjoy the convenience of worldwide shipping options.
          Your satisfaction is our priority, and we strive to make your shopping
          experience as delightful as wearing our jewelry.
          <br />
          Indulge in the artistry of minimalism and discover the allure of
          understated elegance with<span> Shop</span>. Elevate your look, tell
          your story, and celebrate the beauty of simplicity with our curated
          collection.
          <span>
            Thank you for choosing us to be a part of your journey. Happy
            shopping!
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
