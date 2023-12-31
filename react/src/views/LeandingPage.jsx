import React from 'react';
import leandingpage from '../../images/doneur.jpg';
import { Link } from 'react-router-dom';
import BloodTypes from './BloodTypes';
import '../components/CSS/Leandingpage.css';
import '../components/CSS/Donations.css';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { motion, useScroll } from "framer-motion";
import Footer from '../components/Footer/Footer';




const LeandingPage = () => {
  const { scrollYProgress } = useScroll();



  return (

    <div class=" ">

    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />

  <div className='' >

		</div>

        <div className="container mx-auto flex items-center justify-between p-8 pl-[8rem]">
        <div className="text-section flex-1 pr-8">
          <h1 className="text-4xl font-bold mb-4 donate-blood">Donate Blood,</h1>
          <h1 className="text-4xl font-semibold mb-4">save life!</h1>
          <p className="text-lg text-gray-700 mb-6">Your donation can save lives. Join us in making a difference.</p>
          <p className="text-lg text-gray-700 mb-6"> <a className="underline decoration-red-500">Give blood  </a> and give the gift of life.
            Come to give blood </p>

          <Link to='/healthcheck' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Donate Now </span>
          </Link>

        </div>



  <div className='flex pr-5 space-x-1 justify-center items-center'>
  <span className='sr-only'></span>
  <div className='slider-thumb animate-custom-bounce ' style={{ animationDelay: '-0.3s', animationDuration: '2s' }}>
  </div>
</div>





      </div>


      {/* We're helping people */ }
      <div className='  flex items-center justify-between relative w-[85rem]  bg-red-500 p-8 rounded-tr-[110px] pl-10 absolute '>

        <div>
          <h1 className="text-4xl font-semibold mb-4 text-white">
            We are helping people from 5 years
          </h1>
          <p className="text-lg text-gray-300 mb-6">
          “Give the Gift of Life: Donate Blood.” “Saving Lives, One Pint at a Time.” “Your Blood Can Save Lives – Donate Today.”
            <br/>
          “Donate Blood, Share Life.</p>
        </div>

        <Link to='/healthcheck' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Donate Now</span>
        </Link>


      </div>



      {/* Donation Process */ }

    <div className='pl-[15rem]  pr-[10rem] pb-[5rem]'>
        <div className="flex sm:flex-row flex-col   " style={{ paddingTop: '30px'  ,marginTop : "15px"}}>
          <div className="flex-col">
            <h1 className="text-4xl font-bold mb-4"> Donation process </h1>
            <p className="text-lg text-gray-500 mb-6">
              Welcome to our streamlined and secure donation process! Your support means the world to us.
              By contributing to our cause, you become a crucial part of the positive change we're working towards.
              Thank you for taking the step to make a difference. Together,
              we can create lasting impact and transform lives
            </p>
          </div>
        </div>
      <div className='flex sm:flex-row flex-col    flex-row w-full items-center justify-center min-h-screen ' style={{ paddingTop: '', paddingBottom: '400px' }}>
      {/* First Card */}
      <div className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-300  flex-1'>
        <div className="flex justify-between w-full">
        </div>
        <div>
          <div className="font-bold text-3xl">
            Health Check
          </div>
          <div className="font-semibold text-sm text-gray-500 py-4">
          Our blood donation eligibility form is designed to ensure the safety and well-being of both donors and recipients.both donors and recipients
          </div>
          <div>
            <Link to='/healthcheck' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Test Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-purple-300  flex-1' >
        {/* ... (Repeat structure for other cards) */}
        <div>
          <div className="font-bold text-2xl">
            Fill out the form
          </div>
          <div className="font-semibold text-sm text-gray-500 py-4">
                Filling out the form entails providing the necessary information and
                details requested within a designated  online interface
          </div>
          <div>
            <Link to='/healthcheck' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-purple-700 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple-500 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Test Now</span>
            </Link>
          </div>
      </div>
      </div>



      {/* Third Card */}
      <div className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-red-300  flex-1'>
      <div>
      <div className="font-bold text-3xl">
        Thank you
      </div>
      <div className="font-semibold text-sm text-gray-500 py-4">
        We extend our heartfelt gratitude,and we extend our heartfelt gratitude.
        making a positive impact on the lives we touch
      </div>
      <div>
        <Link to='/healthcheck' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-300 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Test Now</span>
        </Link>
      </div>
    </div>
      </div>




      {/* Fourth Card */}
      <div className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-green-300  flex-1'>
        {/* ... (Repeat structure for other cards) */}
        <div>

        <div className="font-semibold text-sm text-gray-500 py-4">
        Your generosity has the power to save lives. Take a  step towards making a positive impact by joining us in our mission to make a difference.
        Give the gift of life by donating blood. Your act of kindness
        </div>
        <div>
          <Link to='/healthcheck' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-300 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Test Now</span>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </div>











      <div className='pt-[80px]'>
      <BloodTypes />

    </div>
    <footer className='pt-[5rem]'>

<Footer />
    </footer>




    </div>
  );
}

export default LeandingPage;
