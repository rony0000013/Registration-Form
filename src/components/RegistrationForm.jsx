import React from 'react'

const RegistrationForm = () => {
    return (
        <>
            <form className="flex  flex-col w-[335px] px-6 py-6 sm:w-[380px] sm:px-6 sm:py-6 md:w-full md:px-8 md:py-10 rounded-xl shadow-2xl bg-gradient-to-r from-violet-500 to-indigo-500">
                <div className="mb-4">
                    <label for="name" className="block mb-2 text-xs font-bold text-gray-100 ">Your Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="your name" required />
                </div>
                <div className="mb-4">
                    <label for="email" className="block mb-2 text-xs font-bold text-gray-100 ">Your Email </label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="name@example.com" required />
                </div>
                <div className="mb-4">
                    <label for="webiste-link" className="block mb-2 text-xs font-bold text-gray-100 ">Website URL</label>
                    <input type="url" id="website-link" className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="https://yourwebsite.com" required />
                </div>
                <div className="mb-4">
                    <label for="image-link" className="block mb-2 text-xs font-bold text-gray-100 ">Image URL</label>
                    <input type="url" id="image-link" className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="https://imageurl.com" required />
                </div>
                <fieldset className="flex space-x-12 mb-4 pt-2">
                <div for="gender" className="block  text-sm font-medium text-gray-100 ">Gender</div>
                        
                        <div class="flex items-center mb-4">
                            <input id="gender-male" type="radio" name="gender" value="male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                            <label for="gender-male" className="block ml-2 text-sm font-medium text-gray-300">
                                Male
                            </label>
                        </div>

                        <div class="flex items-center mb-4">
                            <input id="gender-female" type="radio" name="gender" value="female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                            <label for="gender-female" className="block ml-2 text-sm font-medium text-gray-300">
                                Female
                            </label>
                        </div>
                        </fieldset>
                    
                
                <div className="flex space-x-16 mb-4">
                <div for="skills" className="block  text-sm font-medium text-gray-100 ">Skills</div>

                    <fieldset className="grid grid-cols-2 gap-x-4 items-start">
                        <legend className="sr-only">Checkbox variants</legend>

                        <div className="flex items-center mb-4">
                            <input id="html" type="checkbox" value="" className="w-4 h-4 text-cyan-400 bg-gray-100 border-gray-300 focus:ring-blue-500  rounded-sm" />
                            <label for="html" className="ml-2 text-sm font-medium text-gray-300 ">HTML </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="css" type="checkbox" value="" className="w-4 h-4 text-cyan-400 bg-gray-100  border-gray-300 focus:ring-blue-500  rounded-sm" />
                            <label for="css" className="ml-2 text-sm font-medium text-gray-300 ">CSS</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="javascript" type="checkbox" value="" className="w-4 h-4 text-cyan-400 bg-gray-100  border-gray-300 focus:ring-blue-500  rounded-sm" />
                            <label for="javascript" className="ml-2 text-sm font-medium text-gray-300 ">JavaScript</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="react-js" type="checkbox" value="" className="w-4 h-4 text-cyan-400 rounded-sm" />
                            <label for="react-js" className="ml-2 text-sm font-medium text-gray-300 ">React.js</label>
                        </div>


                    </fieldset>

                </div>
                <div className="flex justify-between">

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Enroll Student</button>
                    <button type="submit" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Clear</button>
                </div>
            </form>
        </>
    )
}

export default RegistrationForm