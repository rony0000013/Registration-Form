import React from "react";

const StudentCard = ({ firstName = "Vikas", lastName = "Rai", email = "text@nextjsdev.com", imageURL = "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg" }) => {

  return (
    <div className="flex w-[350px] h-[220px] md:w-[400px] md:h-[230px] border-2 border-red-500 bg-white rounded-xl shadow-2xl">
      <div className="w-full flex  items-center justify-between px-4">
        <div className="flex justify-center flex-col space-y-2">
          <h2 className="font-inter font-semibold text-gray-200 text-xl">{firstName} {lastName}</h2>
          <p className="font-inter font-semibold text-gray-200 text-md">Web Developer</p>
          <div className="font-inter font-semibold text-gray-200 text-sm">{email}</div>
        </div>
        <div className=" w-32 h-32 md:w-40 md:h-40">
          <img src={imageURL} alt="Student profile Pic" className="rounded-full  " />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
