import React, { useState } from 'react'

const RegistrationForm = ({ onAddStudent }) => {

    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        teamName: "",
        gender: "",
        mobile: "",
    });


    const handleStudentChange = (e) => {

        e.preventDefault();

        const newValue = e.target.value;
        const inputName = e.target.name;

        setStudentData((prevValue) => {
            if (inputName === "fName") {
                return {
                    name: newValue,
                    email: prevValue.email,
                    
                    
                    gender: prevValue.gender,
                    skills: prevValue.skills
                };
            } else if (inputName === "Email") {
                return {
                    name: prevValue.name,
                    email: newValue,
                    
                    
                    gender: prevValue.gender,
                    skills: prevValue.skills
                };
            } else if (inputName === "webURL") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    
                    
                    gender: prevValue.gender,
                    skills: prevValue.skills
                };
            } else if (inputName === "imageURL") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    
                    
                    gender: prevValue.gender,
                    skills: prevValue.skills
                }
            } else if (inputName === "gender") {

                const { value, checked } = e.target;

                let studentGender;

                if (checked) {
                    studentGender = value;
                }

                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    gender: studentGender,
                    skills: prevValue.skills
                }
            } 
        });

    };



    const handleOnClick = () => {

        onAddStudent(studentData.name, studentData.email, studentData.websiteURL, studentData.imageURL, studentData.gender, studentData.skills);
        console.log(studentData);

    }

    const handleClearFields = () => {
        setStudentData({
            name: "",
            email: "",

            gender: "",
            skills: []
        });

        let checkBox = document.getElementsByName('check-box');
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].checked =false;
        }
        

        let radios = document.getElementsByName('gender');
        for (let i = 0; i < radios.length; i++) {
           radios[i].checked = false;
             
        }
    }



    return (
        <>
            <form className="flex accent-blue-600 flex-col w-[335px] px-6 py-6 sm:w-[380px] sm:px-6 sm:py-6 md:w-full md:px-8 md:py-10 rounded-xl shadow-2xl bg-gradient-to-r from-violet-500 to-indigo-500">
                <div className="mb-4">
                    <label htmlFor="fName" className="block mb-2 text-xs font-bold text-gray-100 ">Team Leads Name<span className='text-red-600'>*</span></label>
                    <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Enter your Team-Lead name" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="fName" className="block mb-2 text-xs font-bold text-gray-100 ">Member-2 Name<span className='text-red-600'>*</span></label>
                    <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Enter Name Here" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="fName" className="block mb-2 text-xs font-bold text-gray-100 ">Member-3 Name<span className='text-red-600'>*</span></label>
                    <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Enter Name Here" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="fName" className="block mb-2 text-xs font-bold text-gray-100 ">Member-4 Name<span className='text-red-600'>*</span></label>
                    <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Enter Name Here" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="Email" className="block mb-2 text-xs font-bold text-gray-100 ">Your Email (AOT Mail)<span className='text-red-600'>*</span></label>
                    <input type="email" name="Email" value={studentData.email} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="name@aot.edu.in" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="teamName" className="block mb-2 text-xs font-bold text-gray-100 ">Team Name<span className='text-red-600'>*</span></label>
                    <input type="url" name="teamName" value={studentData.websiteURL} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Some Thing Cool" required />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="imageURL" className="block mb-2 text-xs font-bold text-gray-100 ">Image URL</label>
                    <input type="url" name="imageURL" value={studentData.imageURL} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="https://imageurl.com" required />
                </div> */}
                <div className="mb-4">
                    <label htmlFor="mobile" className="block mb-2 text-xs font-bold text-gray-100 ">Mobile Number of Team Leader<span className='text-red-600'>*</span></label>
                    <input type="text" name="mobile" value={studentData.email} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="+91-XXXXXXXXXX" required />
                </div>
                <div className="flex space-x-12 mb-4 pt-2">
                
                    <div className="block  text-sm font-medium text-gray-100 ">Gender</div>

                    <div className="flex items-center mb-4">
                        <input id="gender-male" type="radio" name="gender" value="Male" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4   " />
                        <label htmlFor="gender-male" className="block ml-2 text-sm font-medium text-gray-300">
                            Male
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="gender-female" type="radio" name="gender" value="Female" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4  " />
                        <label htmlFor="gender-female" className="block ml-2 text-sm font-medium text-gray-300">
                            Female
                        </label>
                    </div>
                </div>


                <div className="flex justify-between">

                    <button onClick={handleOnClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Enroll Student</button>
                    <button onClick={handleClearFields} type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Clear</button>
                </div>
            </form>
        </>
    )
}

export default RegistrationForm