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
    if (i < rating && i + 1 > rating) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfStroke}
        />
      );
    } else if (i <= rating) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarSolid}
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarRegular}
        />
      );
    }
  }

  return <div key={key}>{stars}</div>;
};

export default ReviewRating;
