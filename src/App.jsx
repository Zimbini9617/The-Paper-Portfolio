import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';

const App = () => {
  let tl = gsap.timeline();
  let wrapper = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: main.current,
      smooth: true,
    });
    scroll.scrollTo(main.current);
    tl.to(wrapper.current, { y: '100vh', scale: 0.6, duration: 0 });
    tl.to(wrapper.current, { y: '30vh', duration: 1, delay: 1 });
    tl.to(wrapper.current, { y: '0vh', rotate: 360, scale: 1, duration: 0.8 });
  });

  return (
    <>
      <div className="bg-[#222] overflow-hidden" ref={main} data-scroll>
        <div
          className="bg-[#C5BEB4] h-[125vh] w-screen relative overflow-hidden"
          ref={wrapper}
        >
          <Navbar />
          <section className="w-full h-[420px] flex items-center justify-between py-10 px-12">
            <div className="w-[30%] h-full">
              <div className="h-[60%] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                  alt="table lamp"
                  className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
                AVRO | KO{' '}
                <span className="bg-[#DB1807] p-1 text-white text-2xl rounded-md font-medium">
                  NEW
                </span>
              </h2>
              <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                ipsa doloribus a dolorem ratione minus voluptas totam ullam
                facilis alias!
              </p>
            </div>
            <div className="w-[30%] border-l-2 border-[#938D86] border-r-2 h-full  text-center px-5">
              <h2 className="font-CondMedium text-7xl mb-5">ALL WORK!</h2>
              <h3 className="mb-10 font-NewLight text-5xl font-normal">
                A Featured selection <br /> the last work - <br /> of the last
                years.
              </h3>

              <h5 className=" font-NewLight font-medium">
                {' '}
                <span className="font-CondMedium font-bold text-2xl ml-2">TIP!</span> Drag
                sideways to navigate
              </h5>
            </div>
            <div className="w-[30%]">
              <div className="h-[60%] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                  alt="shoe"
                  className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
                The Roger hub{' '}
                <span className="bg-[#DB1807] p-1 text-white text-2xl rounded-md font-medium">
                  new
                </span>
              </h2>
              <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quae animi dolorum deserunt facilis voluptate illo
              </p>
            </div>
          </section>
          <h1 className="text-[700px]/[600px] bg-[#1c1c19] text-[#C4BCB3] w-[96%] ml-[2%] font-Canopee tracking-tighter font-thin text-center">
            MIRANDA
          </h1>
        </div>

        {/* new section here */}
        <section className="bg-[#C5BEB4] w-full h-[140vh] py-14 px-[40px] flex items-center justify-between">
          <div className="w-[35%] h-full pr-[50px] border-r-2 border-[#555454]">
            <h1 className="text-[100px]/[150px] font-Canopee font-thin">
              INTERACTIVE <br />
              <span className="text-[210px] font-black">ARTIST!</span>
            </h1>
            <img
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
              alt="desing"
              className="h-[50%] w-full object-cover"
            />
            <p className="text-4xl font-CondMedium text-[#2f2f2f] mt-10">
              <span className="bg-[#222] text-white mr-2 text-4xl p-2">A</span>s
              a Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Beatae, id laudantium repudiandae consectetur illum quis sit nulla
              incidunt sint sed.
            </p>
          </div>

          <div className="w-[65%] h-full px-[60px]">
            <img
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
              alt="design"
              className="h-[60%] object-cover w-full"
            />
            <h1 className="font-Canopee text-[130px]/[130px] font-thin mt-5">
              Digital Art Director Interative Designer Creative developer based
              in Amsterdam, NL.
            </h1>
          </div>
        </section>

        <section className="py-10 bg-[#C5BEB4] relative">
          <h1 className="uppercase font-Canopee bg-[#1c1c19] text-[550px]/[500px] tracking-[-10px] text-[#C4BCB3] w-fit font-thin ml-[2%] px-[20px]">
            Website
          </h1>
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
            alt="website"
            className="h-[450px] absolute top-10 right-6"
          ></img>
        </section>

        <section className="w-full flex items-center justify-between bg-[#C4BCB3] px-5">
          <div className="w-[60%] border-[#938D86] border-r-2 px-[60px] py-[80px] h-full">
            <div className="flex justify-between items-stretch my-5">
              <div className="w-50%] border-[#938D86] border-r-2  px-4 mr-5">
                <h2 className="font-CondMedium text-6xl mb-5">
                  UPCOMING NEXT
                </h2>
                <h3 className="mb-10 font-NewLight text-4xl font-normal">
                  Fresh entry - A selected
                  <br /> work from the latest - <br /> digital releases.
                </h3>

                <h5 className=" font-NewLight font-medium ">
                  {' '}
                  <span className="font-CondMedium font-bold text-lg ml-2">
                    TIP!
                  </span>{' '}
                  Click on the image to explore
                </h5>
              </div>
              <div className="w-[50%] px-4">
                <div className="h-[60%] overflow-hidden">
                  <img
                    src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5c79f349770ebcc28ec4_thumbnail-small.webp?"
                    alt="table lamp"
                    className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                  />
                </div>
                <h2 className="font-Canopee mt-3 text-4xl font-semibold flex items-center gap-2">
                  UNEXPECTED TIME
                </h2>
                <p className="mt-4 font-CondMedium text-2xl font-thin text-[#383733]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  ipsa doloribus a dolorem ratione minus voluptas totam ullam
                  facilis alias!
                </p>
              </div>
            </div>
            <div className="mt-10">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-[40%]">
            <h2 className='font-Canopee font-semibold text-[100px]/[100px] mx-10'>THINK, CREATE <br />
            <span className='font-Canopee font-thin text-[300px]/[300px]'>DELIVER</span></h2>
            <p className='font-CondMedium text-[50px] text-[#2f2f2f] font-normal ml-2'>
              <span className='bg-[#222] text-white mr-2 text-[50px]/[50px] py-2'>A</span> stong project is created by deep collaboration. i designed, develop, and deliver websites that drive results and win awards. <br />
              <br />Like an artisan, I like to start from raw matter and give life ton iconic product that makes your brand stand out, starting from Visual Strategy that guide the clients vision to reality.
            </p>
            <div className="h-[200px] bg-[#CAC1B6] border border-[#2f2f2fc6] rounded-[50%] w-full ml-6 flex items-center justify-center flex-nowrap overflow-hidden  hover:cursor-pointer animation">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
                alt="icon"
                className="h-[60px] transition ease-in duration-500 translate-x-[-120%]"
              />
              <h1 className="text-6xl font-bold font-Canopee w-full h-full flex items-center justify-center translate-x-[-26%] transition ease-in duration-500">
                All Work
              </h1>
            </div>
          </div>
        </section>

        { /* new section */ }

        <section className='w-full h-[420px] flex items-center justify-between bg-[#C4BCB3] px-5'>
          <div className='border-t-2 w-full border-black'>
            <div className='border-b-2 w-full h-48 border-black'>
            <div className='flex items-center justify-between'>
              <h2 className='font-serif font-normal text-4xl mt-10'>SITE OF THE DAY<br />
              <span className='font-Canopee font-bold mt-4 text-8xl'>AWARDS 9</span></h2>

              <h3 className='font-serif font-normal text-4xl mt-10'>SITE OF THE MONTH<br />
              <span className='font-Canopee font-bold mt-4 text-8xl'>WINNERS 1</span></h3>

              <h4 className='font-serif font-normal text-4xl mt-10'>FWA OF THE DAY <br />
              <span className='font-Canopee font-bold mt-4 text-8xl'>AWARDS 6</span></h4>

              <h5 className='font-serif font-normal text-4xl mt-10'>ACCLAIMED<br />
              <span className='font-Canopee font-bold mt-4 text-8xl'>MENTIONS 8</span></h5>
            </div>
          </div>
          </div>
        </section>

        { /* start new section */ }

        <section></section>
      </div>
    </>
  );
};

export default App;