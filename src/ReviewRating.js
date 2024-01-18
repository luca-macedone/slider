import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalfStroke,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const ReviewRating = (rating, key) => {
  const maxStars = 5;
  let stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i < rating.rating && i + 1 > rating.rating) {
      // console.log(i, " v ", rating.rating, "half");
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfStroke}
          className="me-1"
        />
      );
    } else if (i <= rating.rating) {
      // console.log(i, " v ", rating.rating, "full");
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarSolid}
          className="me-1"
        />
      );
    } else {
      // console.log(i, " v ", rating.rating, "empty");
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarRegular}
          className="me-1"
        />
      );
    }
  }

  return <div key={key}>{stars}</div>;
};

export default ReviewRating;
