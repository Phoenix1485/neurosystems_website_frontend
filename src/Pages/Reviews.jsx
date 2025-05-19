import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ReportModal from "../Components/report/ReportModal";
import AddReviewModal from "../Components/Reviews/ReviewForm";
import ReviewPopupModal from "../Components/Reviews/ReviewPopupModal";
import { getReviews } from "../api/reviewApi";
import AnimatedText from "../Animations/AnimatedHeader";
import { showErrorToast } from "../Components/ToastProvider";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
    checkLocalStorage();
  }, []);

  const checkLocalStorage = () => {
    const email = localStorage.getItem("email");
    if (email) {
      setLoggedInUserEmail(email);
    }
  };

  const fetchReviews = async () => {
    try {
      const data = await getReviews();
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setReviews(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      showErrorToast("Error fetching reviews");
      setIsLoading(false);
    }
  };

  const openReportModal = (review) => {
    setSelectedReview(review);
    setShowReportModal(true);
  };

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  const openAddReviewModal = () => {
    setShowAddReviewModal(true);
  };

  const closeAddReviewModal = () => {
    setShowAddReviewModal(false);
  };

  const truncateText = (text, limit) => {
    if (text.split(" ").length > limit) {
      return text.split(" ").slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const openFullReviewPopup = (name, text) => {
    const fullReview = {
      name: name,
      text: text,
    };
    setPopupContent(fullReview);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-8 text-center items-center">
        <h1 className="text-5xl font-black mb-4 relative">
          <AnimatedText text="Reviews" />
        </h1>
        <p className="text-xl mb-8 font-mono">
          Elevating Success Stories: Empowering Clients, Transforming Businesses
        </p>
      </div>

      <div className="container mx-auto mb-14">
        {loggedInUserEmail ? (
          <div className="flex justify-end mx-10">
            <Button
              variant="contained"
              onClick={openAddReviewModal}
              className="bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 duration-200"
            >
              Add Review
            </Button>
          </div>
        ) : (
          <div className="flex justify-end xs:mx-0 md:mx-2 lg:mx-4">
            <a href="/login" className="text-gray-500 mr-6 underline-none">
              <p className="text-indigo-600 underline-none cursor-pointer">
                You must be logged in to submit a review.
              </p>
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {isLoading ? (
            <p className="text-gray-600">Loading reviews...</p>
          ) : reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="bg-bg-main-color mx-2 mb-4 md:mx-4 md:mb-4 lg:mx-4 lg:mb-4 h-60 max-w-md shadow-md rounded-lg p-4 relative flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      {review.username}
                    </h3>
                    <p className="text-slate-300">{review.email}</p>
                    <div className="flex items-center">
                      <Rating
                        name="read-only"
                        value={review.rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={<span className="text-slate-300">★</span>}
                        icon={<span className="text-indigo-600">★</span>}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 absolute top-2 right-2">
                    {formatDateTime(review.createdAt)}
                  </div>
                </div>
                <p className="text-slate-200 mb-2 flex-1">
                  {truncateText(review.text, 40)}
                  {review.text.split(" ").length > 40 && (
                    <button
                      className="text-xs text-indigo-500 hover:text-indigo-600 ml-2 focus:outline-none"
                      onClick={() =>
                        openFullReviewPopup(review.username, review.text)
                      }
                    >
                      ...more
                    </button>
                  )}
                </p>
                {loggedInUserEmail ? (
                  <button
                    className="absolute bottom-2 right-2 text-xs text-indigo-500 hover:text-indigo-600"
                    onClick={() => openReportModal(review)}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    Report
                  </button>
                ) : (
                  <p className="text-xs text-indigo-600 absolute bottom-2 right-2">
                    You must be logged in to report this review.
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-indigo-600 text-center">
              No reviews available. Try again after you have logged in again
            </p>
          )}
        </div>

        {showReportModal && selectedReview && (
          <ReportModal
            review={selectedReview}
            onClose={closeReportModal}
            fetchReviews={fetchReviews}
          />
        )}

        {showAddReviewModal && (
          <AddReviewModal
            onClose={closeAddReviewModal}
            loggedInUserEmail={loggedInUserEmail}
            fetchReviews={fetchReviews}
          />
        )}

        {popupContent && (
          <ReviewPopupModal
            name={popupContent.name}
            text={popupContent.text}
            onClose={closePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Reviews;
