import "../ProfileSection/ProfileSection.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../utils/api";

function ProfileSection() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("user_id");
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
      console.log("User account deleted:", userId);
    } catch (error) {
      console.error("Error deleting user account:", error);
    }
    navigate("/signup");
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <section className="profile-section">
      <h3 className="profile-section__title"> Welcome, {username} </h3>
      <button className="profile-section__toggle">Toggle Dark Mode</button>
      <button
        className="profile-section__delete"
        onClick={() => setShowModal(userId)}
      >
        Delete Account
      </button>

      {showModal && (
        <div className="profile-section__modal">
          <div className="profile-section__modal-content">
            <p className="profile-section__modal-text">
              Are you sure you want to delete?
            </p>
            <button
              onClick={closeModal}
              className="profile-section__modal-close"
            >
              {" "}
              cancel{" "}
            </button>
            <button
              onClick={deleteUser}
              className="profile-section__modal-delete"
            >
              {" "}
              delete{" "}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfileSection;
