import { FaStar } from "react-icons/fa";
import "./GoogleReviews.css";

const GoogleReviews = () => {
  const rating = 5;
  const reviews = 32;

  return (
    <div className="google-review-card">
      <h3 className="title-google">Google</h3>

      <div className="rating">
        <span className="score">{rating.toFixed(1)}</span>

        <div className="stars">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="star" />
          ))}
        </div>
      </div>

      <p className="reviews">({reviews} reseñas)</p>

      <a
        className="link"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        VER RESEÑAS →
      </a>
    </div>
  );
};

export default GoogleReviews;