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

function App() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // console.log("use effect", active);
  }, [active]);

  const nextElem = (index) => {
    let oldElem = active;

    const articles = document.querySelectorAll("article");
    //sconsole.log(articles);

    if (index === oldElem) {
      setTimeout(() => {
        articles[index].classList.add("hidden");
      }, 1000);
      if (index + 1 === articles.length) {
        articles[0].remove("hidden");
      } else {
        articles[index + 1].classList.remove("hidden");
      }
    }

    if (active + 1 === reviews.length) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const prevElem = (index) => {
    let oldElem = active;

    const articles = document.querySelectorAll("article");
    //sconsole.log(articles)
    if (index === oldElem) {
      articles[index].classList.add("hidden");
      if (index - 1 <= 0) {
        articles[articles.length - 1].remove("hidden");
      } else {
        articles[index - 1].classList.remove("hidden");
      }
    }

    if (active - 1 <= 0) {
      setActive(reviews.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <div className="App bg-dark min-vh-100 ">
      <div className="container-sm py-5 ">
        <div className="row">
          <div className="col-8 mx-auto mt-5 mb-5 p-5 d-flex gap-4 align-items-center">
            {reviews.map((review, index) => {
              return (
                <article
                  key={review.id}
                  dataKey={index}
                  className={
                    index === active
                      ? "card shadow-lg p-4 bg-dark text-secondary border-0 rounded-4 w-100"
                      : "card shadow-lg p-4 bg-dark text-secondary border-0 rounded-4 w-100 hidden"
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
          <div className="mt-5 col-7 mx-auto d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-info px-4 rounded-pill text-uppercase"
              onClick={(index) => {
                prevElem(index);
              }}
            >
              prev
            </button>
            <button
              type="button"
              className="btn btn-info px-4 rounded-pill text-uppercase"
              onClick={(index) => {
                nextElem(index);
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
