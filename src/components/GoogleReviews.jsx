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

      <p className="reviews">({reviews} Reviews)</p>

      <a
        className="link"
        href="https://www.google.com/maps/place/Tattoo+Pikotatto/@39.7179195,2.90078,586m/data=!3m2!1e3!5s0x1297c5c9eef7ce27:0x363cbd511f7a8e8f!4m18!1m8!3m7!1s0x1297c5aabdd0e84f:0x35261b043dcdd7ff!2sTattoo+Pikotatto!8m2!3d39.7179154!4d2.9033549!15sChRwaWtvIHRhdHRvbyBtYWxsb3JjYVoWIhRwaWtvIHRhdHRvbyBtYWxsb3JjYZIBC3RhdHRvb19zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxc2JGTlhlREJYV0VKbVZHNWFOazFITVU1alZUQjNWVmhPYmxwWVl4QULgAQD6AQQIQRAz!16s%2Fg%2F11mrjg0mwj!3m8!1s0x1297c5aabdd0e84f:0x35261b043dcdd7ff!8m2!3d39.7179154!4d2.9033549!9m1!1b1!15sChRwaWtvIHRhdHRvbyBtYWxsb3JjYVoWIhRwaWtvIHRhdHRvbyBtYWxsb3JjYZIBC3RhdHRvb19zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxc2JGTlhlREJYV0VKbVZHNWFOazFITVU1alZUQjNWVmhPYmxwWVl4QULgAQD6AQQIQRAz!16s%2Fg%2F11mrjg0mwj?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
       <p className="color link pGoogle">VIEW REVIEWS →</p> 
      </a>
    </div>
  );
};

export default GoogleReviews;