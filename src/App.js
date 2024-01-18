import { useEffect, useState } from "react";
import "./App.css";
import ReviewRating from "./ReviewRating";

const reviews = [
  {
    id: 0,
    username: "StarlightSeeker",
    rating: 4.5,
    review:
      "Absolutely loved it! Just a minor issue that prevented a full 5-star rating.",
  },
  {
    id: 1,
    username: "TechWizard91",
    rating: 3.0,
    review:
      "Decent experience overall, but there's definitely room for improvement.",
  },
  {
    id: 2,
    username: "NatureLover",
    rating: 5.0,
    review: "Perfect in every way! Could not have asked for anything better.",
  },
  {
    id: 3,
    username: "CityExplorer",
    rating: 2.5,
    review: "An average experience, nothing too remarkable to mention.",
  },
  {
    id: 4,
    username: "BookwormGal",
    rating: 1.0,
    review: "Really disappointed. It did not meet my expectations at all.",
  },
  {
    id: 5,
    username: "FoodieKing",
    rating: 4.0,
    review: "Great experience! Will definitely recommend to my friends.",
  },
  {
    id: 6,
    username: "AdventureSeeker",
    rating: 1.5,
    review:
      "Not what I was hoping for. Quite a few issues that need addressing.",
  },
  {
    id: 7,
    username: "ZenMaster",
    rating: 3.5,
    review: "Good, but not great. There were some nice aspects, though.",
  },
  {
    id: 8,
    username: "HappyCamper",
    rating: 2.0,
    review: "Below average. I expected much more based on the description.",
  },
  {
    id: 9,
    username: "MysteryEnthusiast",
    rating: 4.75,
    review: "Almost perfect! Just one tiny aspect wasn't to my liking.",
  },
];

const first = { ...reviews[0], id: "first-c" };
const last = { ...reviews[reviews.length - 1], id: "last-c" };

const reviewsExtended = [last, ...reviews, first];
function App() {
  const [active, setActive] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const prevElem = () => {
    if (active <= 1) {
      setIsTransitioning(false);
      setActive(reviewsExtended.length - 1);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 500);
    } else {
      setActive((prev) => prev - 1);
    }
  };

  const nextElem = () => {
    if (active >= reviewsExtended.length - 2) {
      setIsTransitioning(false);
      setActive(0);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 500);
    } else {
      setActive((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (active >= reviewsExtended.length - 2) {
        setIsTransitioning(false);
        setActive(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 500);
      } else {
        setActive((prev) => prev + 1);
      }
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, [active]);

  return (
    <div className="App bg-dark min-vh-100 ">
      <div className="container-sm py-5 ">
        <div className="row">
          <div className="slider">
            <div
              className={`slider-wrapper ${
                isTransitioning ? "transition" : ""
              }`}
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {reviewsExtended.map((review, index) => {
                return (
                  <article
                    key={review.id}
                    className={
                      index === 0
                        ? "card shadow p-4 bg-dark text-secondary border-0 rounded-4 slider-item ms-4 "
                        : "card shadow p-4 bg-dark text-secondary border-0 rounded-4 slider-item"
                    }
                  >
                    <h5 className="fw-bolder text-capitalize">
                      {review.username}
                    </h5>
                    <p className="">{review.review}</p>
                    <div className="text-warning d-flex align-items-center gap-1">
                      <ReviewRating
                        key={review.id + "-" + review.rating}
                        rating={review.rating}
                      ></ReviewRating>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-5 mx-auto d-flex align-items-center justify-content-between">
              <button
                type="button"
                className="btn btn-info px-4 rounded-pill text-uppercase"
                onClick={prevElem}
              >
                prev
              </button>
              <button
                type="button"
                className="btn btn-info px-4 rounded-pill text-uppercase"
                onClick={nextElem}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
