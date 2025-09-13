function InstagramSection() {
  return (
    <section className="instagram-section">
      <h2>Follow Us on Instagram</h2>
      <div className="insta-embed">
        <iframe
          title="Instagram Feed of Milkymist Dairy"
          src="https://www.instagram.com/milkymistdairy/embed"
          width="400"
          height="480"
          frameBorder="0"
          scrolling="no"
          style={{ backgroundColor: 'transparent' }}
        ></iframe>
      </div>
    </section>
  );
}

export default InstagramSection;


