import React from "react";
import BGPattern from "../UI/BGPattern"

const StudentCard = ({ firstName = "Vikas", lastName = "Rai", email = "email@nextjsdev.com", imageURL = "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg" }) => {

  return (
    <div className="relative flex w-[350px] h-[220px] md:w-[400px] md:h-[230px] ring-[6px] ring-purple-600 bg-purple-50 rounded-xl shadow-2xl overflow-hidden">
      <div className="absolute -right-[94px] -top-[86px] md:-right-[104px] md:-top-[104px] ">
        <BGPattern />
      </div>
      <div className="w-full flex  justify-between px-4 z-10">
        <div className="flex py-10 pl-2 flex-col space-y-1">
          <h2 className="font-inter font-bold text-violet-800 text-3xl">{firstName} {lastName}</h2>
          <p className="font-inter font-semibold text-violet-900 text-md">Male</p>
          <div className="font-inter font-semibold text-violet-900 text-sm">{email}</div>
          <p className="font-inter font-semibold text-violet-900 text-sm">www.nextjsdev.com</p>
        </div>
        <div className="mt-6 md:mt-4 w-32 h-32 md:w-40 md:h-40 z-10">
          <img src={imageURL} alt="Student profile Pic" className="rounded-full  " />
        </div>
      </div>
      <div className="absolute flex justify-center space-x-4 md:space-x-8 bottom-1  rounded-md py-1 px-4  mx-2.5  w-[330px] md:w-[380px] h-[40px]">
        <button className=" z-10 text-violet-700 uppercase  bg-violet-100 hover:bg-violet-600 hover:text-gray-100  font-inter font-bold rounded-md text-xs px-2  text-center ">html5</button>
        <button className=" z-10 text-violet-700 uppercase  bg-violet-100 hover:bg-violet-600 hover:text-gray-100  font-inter font-bold rounded-md text-xs px-2  text-center ">css3</button>
        <button className=" z-10 text-violet-700 uppercase  bg-violet-100 hover:bg-violet-600 hover:text-gray-100  font-inter font-bold rounded-md text-xs px-2  text-center ">javascript</button>
        <button className=" z-10 text-violet-700 uppercase  bg-violet-100 hover:bg-violet-600 hover:text-gray-100  font-inter font-bold rounded-md text-xs px-2  text-center ">reactjs</button>




      </div>
    </div>
  );
};

export default StudentCard;
