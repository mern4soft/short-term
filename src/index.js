import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { CiSearch } from "react-icons/ci";
import { FaClock, FaClosedCaptioning, FaHome } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io";
import netflix from './netflix.png'
import tv from '../src/tv.png'
import hello from '../src/hello.gif'
import { IoMdClose } from "react-icons/io";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <h1>App</h1>


      <div className="flex justify-start bg-black gap-4   items-center">
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
      </div>

      <div className="flex justify-center bg-black gap-4  items-center">
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
      </div>

      <div className="flex justify-end bg-black gap-4  items-center">
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
      </div>
      <div className="flex justify-between py-10 bg-black gap-4  items-center">
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
      </div>
      <div className="flex justify-evenly bg-black gap-4  items-center">
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
      </div>
      <div className="flex justify-around bg-black gap-4  items-center">
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">1</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">3</div>
         <div className="bg-green-400 text-white w-10 rounded-full flex justify-center items-center h-10 mb-2">2</div>
      </div>




      <div className="w-[100%]  gap-0 flex h-auto pb-10  bg-green-400">
         <div className="h-auto flex-[28%] shadow-xl rounded-md mx-4 bg-white mt-3">
            <div className="flex justify-between mx-5 items-center mt-2">
               <img src="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico" alt="" />
               <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" className='w-[200px]' alt="" />
            </div>
            <div className=" flex justify-between border mx-5 py-3 px-3 items-center rounded-lg shadow mt-3">
               <input type="text" placeholder='Search...' />
               <CiSearch />
            </div>

            <div className="">
               <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
                  <FaHome size={25} />
                  <span className='text-[20px] font-medium'>Home</span>
               </div>
               <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
                  <FaHome size={25} />
                  <span className='text-[20px] font-medium'>Home</span>
               </div>
               <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
                  <FaHome size={25} />
                  <span className='text-[20px] font-medium'>Home</span>
               </div>
               <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
                  <FaHome size={25} />
                  <span className='text-[20px] font-medium'>Home</span>
               </div>
               <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
                  <FaHome size={25} />
                  <span className='text-[20px] font-medium'>Home</span>
               </div>
               <div className="flex transition-all duration-700 hover:text-blue-800 justify-between mx-5  px-3 py-4">
                  <FaHome size={25} />
                  <span className='text-[20px] font-medium'>Home</span>
               </div>
            </div>

            <div className="flex justify-between px-5 items-center">
               <IoIosNotifications size={28} />
               <span className='text-[20px]'>Notification</span>
               <IoMdClose className=' text-white bg-blue-600 rounded-full w-7 h-7 p-1' />
            </div>


            <div className="mb-6 bg-blue-600 justify-between mx-5 rounded-md px-3 py-7 text-white mt-5 flex">
               <div className="">
                  Lorem ipsum dolor
               </div>
               <p>2</p>
            </div>


            {/* 
      
      https://www.uplabs.com/posts/facebook-redesign-ui-challenge
      
      */}

         </div>
         <div className="h-52 flex-[20%] rounded-md mx-4 bg-white mt-3"></div>
         <div className="h-52 flex-[30%]  rounded-md mx-4 bg-white mt-3"></div>
      </div>
      <div className='flex justify-center items-center  h-screen gap-5 '>
         <div className='mx-5'>
            <img className='-ms-10 mb-4 h-[10rem]' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
            <h1 className='relative bottom-10 text-3xl'>Facebook helps you connect and share with the people in your life.</h1>
         </div>
         <div className='shadow-2xl rounded-lg p-10 w-[500px]'>
            <form action="" className='flex flex-col gap-5'>
               <input type="text" placeholder="Email address or Phone Number" className='rounded-[5px] shadow-sm border p-2' />
               <input type="text" placeholder="Email address or Phone Number" className='rounded-[5px] shadow-sm   border p-2' />
               <button className='bg-blue-600 text-white p-3 rounded-lg'>Log in</button>
               <a href="" className='text-center text-blue-600'>forget Password</a>
               <hr />
               <button className='bg-green-500 text-white text-xl p-3 rounded-lg'>create new Account</button>
            </form>
         </div>
      </div>

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
      <section className='p-10 bg-black h-[600px]'>
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
      <div>

      </div>


   </React.StrictMode>
);