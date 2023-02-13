import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();

  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Ribbit",
      projectInfo: "A pixel-perfect clone of the social media site Reddit.",
      client:
        "Communities, Subscriptions, Posts, Comments, Voting System, Search, Image Uploads, User Profiles, Community Rules",
      technologies:
        "React.js, Redux.js, Python, Flask, SQLAlchemy, AWS, Socket.io",
      industry: "Art & Design",
      repo: {
        name: "https://github.com/Risclover/ribbit",
        link: "https://github.com/Risclover/ribbit",
      },
      url: {
        name: "https://ribbit-app.herokuapp.com",
        link: "https://ribbit-app.herokuapp.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/Ribbit/front-narrow.png",
      sliderImages: [
        "images/Ribbit/single-post.png",
        "images/Ribbit/community.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Reduncrate",
      projectInfo:
        "A pixel-perfect clone of the ecommerce website Uncrate, built as part of a collaboration in a team of 3 other developers.",
      client: "Products, Favorites, Cart, Order History, Search, User Profiles",
      technologies: "React.js, Redux.js, Python, Flask, SQLAlchemy",
      industry: "Art & Design",
      repo: {
        name: "https://github.com/g-wn/uncrate-clone",
        link: "https://github.com/g-wn/uncrate-clone",
      },
      url: {
        name: "https://reduncrate.herokuapp.com",
        link: "https://reduncrate.herokuapp.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/Reduncrate/front.png",
      sliderImages: [
        "images/Reduncrate/single.png",
        "images/Reduncrate/cart.png",
        "images/Reduncrate/favorites.png",
        "images/Reduncrate/footer.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Airbnbeezy",
      projectInfo: "A pixel-perfect clone of Airbnb's website.",
      client: "Spots, Reviews, Images, Bookings, Google Maps",
      technologies: "React.js, Redux.js, Express.js, Sequelize",
      industry: "Art & Design",
      repo: {
        name: "https://github.com/Risclover/API-Project",
        link: "https://github.com/Risclover/API-Project",
      },
      url: {
        name: "https://air-bnbeezy.herokuapp.com",
        link: "https://air-bnbeezy.herokuapp.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/Airbnbeezy/single.png",
      sliderImages: [
        "images/Airbnbeezy/home.png",
        "images/Airbnbeezy/profile.png",
      ],
      categories: [filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          {/* <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul> */}
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
