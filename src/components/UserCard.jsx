import React from "react";

const UserCard = ({firstName = "Vikas", lastName="Rai", email = "text@nextjsdev.com",imageURL="https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg"}) => {

  return (
    <div className="card__container">
      <div className="card__container__inner ">
        <div className="w-40">
          <img src={imageURL} alt="User profile Pic" className="image" />
        </div>

        <div className="user__details">
          <h2>{firstName} {lastName}</h2>
          <p>Web Developer</p>
        </div>

        <div className="user__email">{email}</div>
      </div>
    </div>
  );
};

export default UserCard;
