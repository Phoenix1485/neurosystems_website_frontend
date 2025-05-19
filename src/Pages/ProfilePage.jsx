import React, { useState, useEffect } from "react";
import { getProfile } from "../services/authService";
import { Rating } from "@mui/material";
import { showErrorToast } from "../Components/ToastProvider";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProfile = async () => {
      try {
        const { data } = await getProfile(token);
        setUser(data);
      } catch (err) {
        console.error(err);
        showErrorToast("Error fetching profile");
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 bg-slate-900">
        Loading...
      </div>
    );
  }

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
  };

  const reviewsToDisplay = user.reviews.slice(0, 10);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4">
      <div className="w-full max-w-5xl space-y-8">
        {/* Profile Info */}
        <div className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 shadow-2xl rounded-2xl p-6 text-slate-200 hover:shadow-slate-800 transition duration-300">
          <h3 className="text-3xl font-bold mb-6 text-center tracking-wide text-white">Profile information</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Username:</strong> {user.user.username}</p>
            <p><strong>Email:</strong> {user.user.email}</p>
            <p><strong>Account created:</strong> {formatDateTime(user.user.createdAt)}</p>
            <p><strong>Last login:</strong> {formatDateTime(user.user.updatedAt)}</p>
            <p><strong>Verified:</strong>{" "}
              <span className={`
                font-semibold 
                ${user.user.verified === true ? "text-green-400" :
                  user.user.verified === false ? "text-red-400" : "text-yellow-400"
                }`}>
                {user.user.verified === true ? "Yes" :
                  user.user.verified === false ? "No" : "R/N"}
              </span></p>
            <p>
              <strong>Newsletter:</strong>{" "}
              <span className={`
                font-semibold 
                ${user.user.isSubscribedToNewsletter === true ? "text-green-400" :
                  user.user.isSubscribedToNewsletter === false ? "text-red-400" : "text-yellow-400"
                }`}>
                {user.user.isSubscribedToNewsletter === true ? "Yes" :
                  user.user.isSubscribedToNewsletter === false ? "No" : "R/N"}
              </span>
            </p>
          </div>
        </div>

        {/* Logout */}
        <div className="text-right">
          <Link
            to="/logout"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md shadow-red-900"
          >
            Logout
          </Link>
        </div>

        {/* Reviews */}
        <div className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 shadow-2xl rounded-2xl p-6 text-gray-200 hover:shadow-gray-800 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-center tracking-wide text-white">Your reviews</h3>
          <div className="max-h-72 overflow-y-auto pr-2 custom-scrollbar">
            {reviewsToDisplay.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviewsToDisplay.map((review) => (
                  <div
                    key={review._id}
                    className="bg-zinc-900/70 hover:bg-zinc-800/90 transition duration-300 border border-zinc-700 rounded-xl p-4 shadow-md"
                  >
                    <p className="mb-2">
                      <span className="font-semibold text-gray-400">Stars:</span>{" "}
                      <Rating
                        name="read-only"
                        value={review.rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={<span className="text-zinc-600">★</span>}
                        icon={<span className="text-yellow-400">★</span>}
                      />
                    </p>
                    <p className="text-sm text-gray-300 mb-2">{review.text}</p>
                    <p className="text-xs text-gray-500">
                      Posted on {formatDateTime(review.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center">No reviews available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
