import { useRef, useState, useEffect } from 'react';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 z-50 w-full h-20 flex items-center justify-between px-6 backdrop-blur-2xl bg-black/5">
                <div className="flex items-center justify-center">
                    <h1 className='text-2xl text-white font-bold tracking-wider font-Asimovian' >
                        <a href="#">iamtauheed</a>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex w-130 h-full items-center justify-center">
                    <ul className='w-full h-full flex justify-around text-white font-light' >
                        <a href="#home" className='nav-li nav'><li>HOME</li></a>
                        <a href="#about" className='nav-li nav'><li>ABOUT</li></a>
                        <a href="#highlights" className='nav-li nav'><li>HIGHLIGHTS</li></a>
                        <a href="#contact" className='nav-li nav'><li>CONTACT</li></a>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-3xl flex flex-col items-center justify-center overflow-hidden md:hidden">
                    <ul className='flex flex-col items-center space-y-8 text-white text-2xl font-light'>
                        <li className='hover:text-amber-500 transition-colors'><a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
                        <li className='hover:text-amber-500 transition-colors'><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
                        <li className='hover:text-amber-500 transition-colors'><a href="#highlights" onClick={() => setIsMenuOpen(false)}>HIGHLIGHTS</a></li>
                        <li className='hover:text-amber-500 transition-colors'><a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a></li>
                    </ul>

                    <div className="mt-10 h-15 w-15 flex justify-center items-center gap-5">
                        <a href="">
                            <svg class="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="">
                            <svg class="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                        </a>
                        <a href="">
                            <svg class="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="">
                            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6ZM4 18L4 9.46455L10.9998 13.5069C11.6187 13.8644 12.3813 13.8644 13.0002 13.5069L20 9.46455V18H4ZM12 11.775L4 7.155V6H20V7.155L12 11.775Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default Nav