    import { FaRegFileAlt, FaGlobe, FaSearch } from "react-icons/fa";

function FeatureCards() {
  return (
    <div className="features-section">
      
      <div className="card">
        <div className="icon">
          <FaRegFileAlt />
        </div>
        <h2>Create Stunning Blogs</h2>
        <p>
          Craft visually appealing and engaging blogs using our intuitive and 
          user-friendly editor. Express yourself with rich formatting options, 
          images, videos, and more.
        </p>
      </div>

      <div className="card">
        <div className="icon">
          <FaGlobe />
        </div>
        <h2>Reach a Global Audience</h2>
        <p>
          Share your stories, ideas, and insights with a worldwide audience. 
          Connect with readers from different backgrounds and cultures who are 
          eager to discover your content.
        </p>
      </div>

      <div className="card">
        <div className="icon">
          <FaSearch />
        </div>
        <h2>Enhance Your Online Presence</h2>
        <p>
          Whether you're a seasoned Blogshog or just starting out, Blogshog 
          helps you establish your online identity. Build your personal brand 
          and become a trusted voice in your niche.
        </p>
      </div>

    </div>
  );
}

export default FeatureCards;