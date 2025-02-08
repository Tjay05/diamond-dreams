import React, { useState } from "react";
import { FaUser, FaEnvelope, FaBook, FaCamera } from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [course, setCourse] = useState("Applied Art");
  const [avatar, setAvatar] = useState(profile);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page" >
      <div className="profile-container">
        <div className="profile-card">
          <label className="profile-upload-label">
            <FaCamera className="profile-upload-icon" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="profile-upload"
            />
          </label>
          <img src={avatar} alt="Student Avatar" className="profile-avatar" />
          <div className="profile-field">
            <FaUser className="profile-icon" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="profile-input"
            />
          </div>
          <div className="profile-field">
            <FaEnvelope className="profile-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="profile-input"
            />
          </div>
          <div className="profile-field">
            <FaBook className="profile-icon" />
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="profile-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
