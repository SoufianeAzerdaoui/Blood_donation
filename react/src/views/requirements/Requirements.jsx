import React ,{useState} from 'react';
import './Requirements.css';
import { motion, useScroll } from "framer-motion";
import image1 from '../../../images/cantdone1.jpeg';
import image2 from '../../../images/cantdone2.jpeg';
import image3 from '../../../images/cantdone3.jpeg';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import the plus and minus icons


import health1 from '../../../images/health1.png';
import TablesRequiremnts from './TablesRequiremnts';
import Wavey from './../Wave';


const Requirements = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpenOne, setDropdownOpenOne] = useState(false);
  const [isDropdownOpenTwo, setDropdownOpenTwo] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownOne = () => {
    setDropdownOpenOne(!isDropdownOpenOne);
  };

  const toggleDropdownTwo = () => {
    setDropdownOpenTwo(!isDropdownOpenTwo);
  };

  const { scrollYProgress } = useScroll();


  return (
    <div className='bg-white'>

        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
    {/* Basic Blood Donation Requirements */ }
        <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-sky-400 ">Basic Blood Donation Requirements
                </h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">
                  Most people in good health, at least 18 years old, and weighing at least 110 pounds may donate whole blood every 56 days. Review basic blood donation requirements and schedule your appointment today.

                </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

            <div>

              <div className="health1 flex justify-center items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src={health1} alt="" className="flex justify-center items-center" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Age Re</h3>
              <div className='flex justify-center items-center'>

                <div className="POPOSList dropdown dropdown-bottom relative">
                  <button onClick={toggleDropdownOne} className="btn m-1">
                    {isDropdownOpenOne ? <FaMinus className="text-sky-400" /> : <FaPlus className="text-sky-400" />}
                  </button>
                  {isDropdownOpenOne && (

                    <ul className=" bg-white pl-5 dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 absolute">
                      <li className='pl-5 '>
                          You must weigh at least 49 Kg to donate blood.
                          There are additional weight requirements for teen donors:
                      </li>
                      <li className='pl-5'>
                          First-time 16 or 17 year old donors who weigh at least 51 Kg may donate  donor center.
                      </li>
                    </ul>
                  )}
                </div>

                <p className="text-gray-600 font-extrabold">Weight requirements</p>
              </div>
            </div>

            <div>

              <div className="health1 flex justify-center items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img src={health1} alt="" className="flex justify-center items-center" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Age Re</h3>
              <div className='flex justify-center items-center'>

                <div className="dropdown dropdown-bottom relative">
                  <button onClick={toggleDropdown} className="btn m-1">
                    {isDropdownOpen ? <FaMinus className="text-sky-400" /> : <FaPlus className="text-sky-400" />}
                  </button>
                  {isDropdownOpen && (

                    <ul className=" bg-white pl-5 dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 absolute">
                      <li className='pl-5 '>
                        You must be at least 18 years old to donate blood. There is no upper age limit.
                      </li>
                    </ul>
                  )}
                </div>

                <p className="text-gray-600 font-extrabold">Age Requirement</p>
              </div>
            </div>



            <div>

            <div className="health1 flex justify-center items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img src={health1} alt="" className="flex justify-center items-center" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Age Re</h3>
            <div className='flex justify-center items-center'>

              <div className="dropdown dropdown-bottom relative">
                <button onClick={toggleDropdownTwo} className="btn m-1">
                  {isDropdownOpenTwo ? <FaMinus className="text-sky-400" /> : <FaPlus className="text-sky-400" />}
                </button>
                {isDropdownOpenTwo && (
                  <ul className="bg-white pl-5 dropdown-content z-[1] menu p-2 shadow rounded-box absolute" style={{ width: '20rem' }}>
                    <li className='pl-8 list-none'>
                      You must be in good health and feeling well on the day of your blood donation. When you donate,
                      you’ll undergo a confidential screening interview and mini-health check of blood pressure, pulse,
                      temperature, and iron level. Here are some ways you can prep for your donation.
                    </li>
                    <li className='pl-8 list-none'>
                      Not everyone is eligible to donate. Some health conditions, medications,
                      or travel may temporarily or permanently prevent people from donating blood
                    </li>
                  </ul>
                )}

              </div>

              <p className="text-gray-600 font-extrabold">Health requirements</p>
            </div>
          </div>
            </div>
        </div>
        </section>

<section className="bg-sky-400">
      <p className="flex justify-center items-center text-white text-3xl font-extrabold"   style={{ padding: '50px' }} >
          Blood Donation Eligibility  : Medications, Medical Conditions & Other Restrictions
      </p>
      <p className="flex justify-center items-center text-white text-xl font-semibold"   style={{ PaddingTop: '5rem' }} >
          The charts below detail blood donation eligibility and restrictions based on certain medications,
          medical conditions,
      </p>
      <p className="flex justify-center items-center text-white text-xl font-semibold pb-12"   style={{ PaddingTop: '5rem' }}>
        recent vaccines, and other potential conditions that may restrict your ability
          to donate blood at this time.
      </p>


      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-5 items-center pb-10 '>

      <button class="bg-slate-50 hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
      " style={{ height : '5rem' }}>
      LOW IRON
      </button>
      <button class="bg-slate-50 hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
      " style={{ height : '5rem' }}>
      TATTOOS & PIERCINGS
      </button>
      <button class="bg-slate-50 hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
      " style={{ height : '5rem' }}>
      MEDICATIONS
      </button>
      <button className="bg-slate-50  hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded
      " style={{ height : '5rem' }}
      >
      CANNABIS USE

      </button>


      </div>

</section>
<section>


    <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2 class="mb-4 text-3xl tracking-tight font-bold text-sky-400  pt-12 pl-10">Vaccinations

        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400 pt-2 pl-12 ">
          Most vaccines won’t impact your blood donation eligibility. Review the list of common vaccines below to understand whether a recent vaccination requires a waiting period before donating blood.
        </p>
    </div>

    <TablesRequiremnts />

    <Wavey />
</section>

{/*<div className="container my-24 mx-auto md:px-6  rounded-lg bg-cover ">

    <h1 className='text-4xl font-extrabold text-gray-800 requirements'>Common Reasons People Can't Donate
        </h1>
  <section className="mb-32">
    <p className="mb-16 text-gray-500 text-center text-2xl  ensure">
        To ensure the safety of both patients and donors, these are some of the requirements donors must meet to be eligible to donate blood based on their donation type.

        To explore a list of eligibility information, Search by Keyword or Browse All.
    </p>

    <div className="mb-16 flex flex-wrap">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={image1} className="w-auto" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 className="mb-4 text-2xl font-bold">That's the news!</h3>
        <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
          </svg>
          Travels
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Published <u>14.01.2022</u> by
          <a href="#!">Lisa McCartney</a>
        </p>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam.
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
          nulla saepe rerum aspernatur odio amet perferendis tempora
          mollitia? Ratione unde magni omnis quaerat blanditiis cumque
          dolore placeat rem dignissimos?
        </p>
      </div>
    </div>

    <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <div
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={image2} className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
        <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="mr-2 h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          Art
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Published <u>12.01.2022</u> by
          <a href="#!">Anna Doe</a>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
          dui, sit amet rutrum enim massa in ante. Curabitur in justo at
          lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
          vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
          vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
          tortor finibus, a eleifend lectus dictum. Cras tempor convallis
          magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
          imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
          at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
          felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
          iaculis est vehicula ut.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={image3} className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 className="mb-4 text-2xl font-bold">Stock market boom</h3>
        <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          Business
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Published <u>10.01.2022</u> by
          <a href="#!">Joe Svan</a>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
          tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
          Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
          augue ornare. Proin ac dui vel lectus eleifend vestibulum et
          lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue
          sem finibus eleifend egestas eu metus. Sed ut dolor id magna
          rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut
          pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
          dignissim malesuada, lacus lorem commodo leo, tristique blandit
          ante mi id metus. Integer et vehicula leo, vitae interdum lectus.
          Praesent nulla purus, commodo at euismod nec, blandit ultrices
          erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae
          justo. Nulla condimentum hendrerit leo, in feugiat ipsum
          condimentum ac. Maecenas sed blandit dolor.
        </p>
      </div>
    </div>
  </section>
  </div>*/}


</div>
  );
}

export default Requirements;
