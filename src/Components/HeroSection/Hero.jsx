import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import HeroProfile from './me.png';
import TiltedCard from './TiltedCard';
import '../../App.css';

function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <section className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg bg-hero max-[769px]:bg-cover relative overflow-hidden" >

                <div
                    className={`absolute inset-0 transition-all duration-500 pointer-events-none ${isHovered ? 'backdrop-blur-2xl z-15 transition-all' : 'backdrop-blur-none -z-10 transition-all'}`}
                />
                <div className="absolute w-25 h-full left-0 flex flex-col items-center justify-end divHidden">
                    <div className="h-65 w-15 flex flex-col justify-center items-center gap-5">
                        <a href="">
                            <svg class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="">
                            <svg class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                        </a>
                        <a href="">
                            <svg class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="">
                            <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6ZM4 18L4 9.46455L10.9998 13.5069C11.6187 13.8644 12.3813 13.8644 13.0002 13.5069L20 9.46455V18H4ZM12 11.775L4 7.155V6H20V7.155L12 11.775Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={`absolute h-full flex items-center select-none transition-all duration-300 ${isHovered ? 'z-60' : 'z-1'}`}>
                    <div className="w-[300px] md:w-[400px] max-[769px]:hidden ">

                        <TiltedCard
                            imageSrc={HeroProfile}
                            altText="Working On It, Dude"
                            captionText="Cool isn't it!?"
                            containerHeight="300px"
                            containerWidth="100%"
                            imageHeight="450px"
                            imageWidth="485px"
                            rotateAmplitude={6}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            overlayContent={
                                <p className="tilted-card-demo-text font-extrabold text-[10px] text-white/20 bg-black/5 cursor-pointer m-3 w-20 h-8 flex justify-center items-center rounded-2xl">
                                    HOVER!!
                                </p>
                            }
                        />

                    </div>
                </div>

                <div
                    className="absolute inset-0 hidden max-[425px]:block bg-cover bg-center bg-no-repeat -z-5"
                    style={{ backgroundImage: `url(${HeroProfile})` }}
                />

                <div className={`relative div-hero flex justify-center w-full max-w-5xl p-2 md:p-10 pointer-events-none transition-all duration-300 ${isHovered ? 'z-0' : 'z-10'}`}>
                    <h1 className="text-4xl h1-hero relative select-none text-outline md:text-7xl lg:text-8xl text-left font-bold flex flex-col font-fira text-hero" >
                        <span className='text-hero' >I'm MOHD</span>
                        <span className="ml-4 md:ml-30 text-[10rem] max-[769px]:text-5xl text-hero">TAUHEED</span>
                        <span className="ml-12 md:ml-130 text-hero" >ANSARI</span>
                    </h1>
                </div>
                <div className='absolute div-hero flex justify-center w-full max-w-5xl p-2 md:p-10 pointer-events-none transition-all duration-300 hover:z-0'>
                    <h1 className="text-4xl h1-hero relative select-none text-white md:text-7xl lg:text-8xl text-left font-bold flex flex-col font-fira text-hero" >
                        <span className='text-hero' >I'm MOHD</span>
                        <span className="ml-4 md:ml-30 text-[10rem] max-[769px]:text-5xl text-hero">TAUHEED</span>
                        <span className="ml-12 md:ml-130 text-hero" >ANSARI</span>
                    </h1>
                </div>

                <div className="absolute bottom-5 left-0 w-full flex justify-center items-center z-50">
                    <a href="#about" className='cursor-pointer'>
                        <svg className="w-8 h-8 text-gray-800 dark:text-white cursor-pointer upDown max-[769px]:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    )
}


export default Hero