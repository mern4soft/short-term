import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { CiSearch } from "react-icons/ci";
import { FaClock, FaClosedCaptioning, FaHome } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io";
import netflix from './netflix.png'
import tv from '../src/tv.png'
import hello from '../src/hello.gif'
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const App = () => {
   const [dropdownVisible, setDropdownVisible] = useState(false);

   const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
   };

   return (
      <React.StrictMode>

         <div className='w-[100%] h-[700px]  bg-transparent/100  ' style={{ backgroundImage: "URL('https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg')" }}>
            <nav className='flex justify-around items-center'>

               <img src={netflix} className='w-[200px] h-[100px]' alt="" />
               <div className='flex gap-10 '>
                  <select class="bg-transparent text-white border border-white" name="English" id="">
                     <option value="1">english</option>
                     <option value="2">malayalam</option>
                  </select>
                  <button className='bg-red-600 text-white'>sign Up</button>
               </div>

            </nav>
            <section className='flex text-white flex-col h-[564px] gap-5 justify-center items-center'>
               <h1 className=' text-6xl' >
                  Unlimited movies, TV shows and more</h1>
               <h5 className='text-3xl'>Watch anywhere. Cancel anytime.

               </h5>
               <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
               <div className='flex gap-3'>
                  <input type="text" className='p-2 w-[500px] text-black' />
                  <button className='text-white bg-red-500 p-2 hover:bg-white hover:text-black transition delay-100 ease-linear  '>Get started</button>
               </div>
            </section>
         </div>
         <section className='p-10 bg-black h-[600px]'>
            <div className='container flex justify-around items-center '>
               <div className='text-white flex flex-col gap-5 mb-[200px]'>
                  <h1 className='text-6xl'>Enjoy on your TV</h1>
                  <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
               </div>
               <div>
                  <img src={tv} className='relative z-50' alt="" />
                  <video className='relative top-[-379px] right-[-80px] ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" muted autoPlay playsInline alt="" />
               </div>
            </div>

         </section>
         <section className='p-10 bg-black h-[600px] outline-8'>
            <div className='container flex justify-around items-center '>

               <div>
                  <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt="" />
                  <div className='bg-black flex justify-around item-center ring-white ring-2 relative -top-[150px] p-[5px] rounded-lg'>
                     <div>
                        <img className='h-[100px] w-[100px]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                     </div>
                     <div className='flex items-center justify-center flex-col'>
                        <h1 className='text-white'>Stranger Things</h1>
                        <h2 className='text-blue-500'>Downloading .......</h2>
                     </div>
                     <div className='bg-black'>
                        <img className='bg-black h-[100px] w-[100px]' src={hello} alt="" />
                     </div>
                  </div>
               </div>
               <div className='text-white flex flex-col gap-5 mb-[200px]'>
                  <h1 className='text-6xl'><b>Download your shows to <br /> watch offline</b></h1>
                  <h5 className='text-2xl'>Save your favourites easily and always have something <br /> to watch.</h5>
               </div>
            </div>

         </section>
         <section className='p-10 bg-black h-[600px] outline-8'>
            <div className='container flex justify-around items-center '>
               <div className='text-white flex flex-col  gap-5 mb-[520px]'>
                  <h1 className='text-6xl'><b>Watch everywhere</b></h1>
                  <h5 className='text-2xl'>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</h5>
               </div>
               <div>
                  <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' className='relative z-50' alt="" />
                  <video className='relative top-[-566px] right-[-120px] w-[394px] h-[467px]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" muted autoPlay playsInline alt="" />
               </div>


            </div>

         </section>
         <section className="flex flex-col gap-5 justify-center items-center p-5 bg-black ">
            <div className='text-white text-5xl'> <b>Frequently Asked Questions</b></div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>
            <div className="bg-gray-800 p-5 text-white flex items-center justify-between w-[1000px]">
               <p className="mb-4">hello world</p>
               <div className="relative">
                  <button onClick={toggleDropdown} className=" text-white font-bold py-2 px-4 rounded">
                     <FaPlus />
                  </button>
                  {dropdownVisible && (
                     <div className="dropdown-content mt-4 right-[-19px] text-center absolute bg-gray-800 text-white py-4 px-4  rounded w-[1000px] transition delay-150">
                        <p>This is the dropdown content</p>
                     </div>
                  )}
               </div>
            </div>

            <section className='flex text-white flex-col  gap-5 justify-center items-center'>
               <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
               <div className='flex gap-3'>
                  <input type="text" className='p-2 w-[500px] text-black' />
                  <button className='text-white bg-red-500 p-2 hover:bg-white hover:text-black transition delay-100 ease-linear  '>Get started</button>
               </div>
            </section>

         </section>
         <footer className='bg-black h-[250px] flex flex-col justify-center items-center outline-slate-500'>




            <div className='flex justify-around item center gap-[300px] text-white'>
               <div >
                  <p>FAQ</p>
                  <p>Help Centre</p>
                  <p>Account</p>
                  <p>Media Centre</p>
               </div>
               <div>
                  <p>Investor Relations</p>
                  <p>Jobs</p>
                  <p>Ways to Watch</p>
                  <p>Terms of Use</p>
                  <p>Privacy</p>
               </div>
               <div>
                  <p>Cookie Preferences</p>
                  <p>Corporate Information</p>
                  <p>Contact Us</p>
                  <p>Legal Notices</p>
                  <p> Only on Netflix </p>
               </div>
            </div>

         </footer>



         <div>

         </div>


      </React.StrictMode>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
