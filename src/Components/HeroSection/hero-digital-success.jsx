import React, { Suspense, useRef } from "react";
import tlogo from "../HeroSection/logo.png";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { TimelineAnimation } from "@/components/timeline-animation";
import { useMediaQuery } from "@/components/use-media-query";
import MotionDrawer from "@/components/motion-drawer";

export const HeroDigitalSuccess = () => {
  const timelineRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col"
    >
      <Suspense>
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
          lazyLoad={false}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#92dbe0"
            color2="#0b7bff"
            color3="#3865cf"
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </Suspense>
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-10 pt-4">
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={"rgba(0,0,0,0.3)"}
            clsBtnClassName="bg-white/10 backdrop-blur-md border-r border-white/10 text-white"
            contentClassName="bg-transparent backdrop-blur-xl border-r border-white/10 text-white"
            btnClassName="bg-white/10 backdrop-blur-md text-white relative w-fit p-2 left-0 top-0"
          >
            <nav className="space-y-4 ">
              <div className="flex items-center gap-2 text-white">
                <img className="w-[60px] h-[70]" src={tlogo} alt="logo" />
              </div>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-100 hover:text-black rounded-sm"
              >
                Home
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-100 hover:text-black rounded-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-100 hover:text-black rounded-sm"
              >
                Experience
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-100 hover:text-black rounded-sm"
              >
                Contact
              </a>
            </nav>
          </MotionDrawer>
          {/* <TimelineAnimation
            once={true}
            as="button"
            animationNum={3}
            timelineRef={timelineRef}
            className="flex items-center gap-2 w-fit px-8 py-4 rounded-full font-bold text-lg bg-neutral-800 text-white"
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-sm font-medium">Book a call</span>
          </TimelineAnimation> */}
        </div>
      )}
      {/* Header */}
      {!isMobile && (
        <header className="relative z-10 flex items-center justify-between px-10 p-4">
          <TimelineAnimation
            once={true}
            animationNum={1}
            timelineRef={timelineRef}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 text-white">
              <img className="w-[79px] h-[90]" src={tlogo} alt="logo" />
            </div>
          </TimelineAnimation>

          <TimelineAnimation
            once={true}
            as="nav"
            animationNum={2}
            timelineRef={timelineRef}
            className="hidden md:flex items-center gap-12 text-sm text-white font-medium"
          >
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              About Us
            </a>
            <a href="#" className="hover:text-white transition">
              Experience
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </TimelineAnimation>
          {/* <TimelineAnimation
            once={true}
            as="button"
            animationNum={3}
            timelineRef={timelineRef}
            className="flex items-center gap-2 w-fit px-8 py-4 rounded-full font-bold text-lg bg-neutral-800 text-white"
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-sm font-medium">Book a call</span>
          </TimelineAnimation> */}
        </header>
      )}
      {/* Main Hero Content */}
      <div className="relative z-10 grow flex flex-col justify-center px-12 md:px-24">
        <TimelineAnimation
          once={true}
          as="h1"
          animationNum={4}
          timelineRef={timelineRef}
          className="flex flex-col xl:flex-row text-[10vw] xl:text-[6.5vw] font-medium leading-[100%] items-baseline gap-x-8 gap-y-2 pb-10 "
        >
          I'm
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-red-500 to-red-500 pb-0 xl:inline-block block">
            Salesforce
          </span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-red-500 to-red-500 pb-8 xl:inline-block block">
            Developer
          </span>
        </TimelineAnimation>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex flex-wrap justify-start gap-4">
            <TimelineAnimation
              once={true}
              as="button"
              animationNum={5}
              timelineRef={timelineRef}
              className="cursor-pointer relative group overflow-hidden bg-white text-black px-8 py-4 rounded-full font-medium text-lg flex items-center gap-3 shadow-[0_0_20px_rgba(255,60,60,0.4)]"
            >
              <img
                src="https://img.icons8.com/?size=100&id=5CpFmPIkX7Wz&format=png&color=000000"
                className="w-6 h-6 rounded-full"
                alt=""
              />
              View My Work
            </TimelineAnimation>
            <TimelineAnimation
              once={true}
              as="button"
              animationNum={6}
              timelineRef={timelineRef}
              className="cursor-pointer border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-medium text-lg text-lg flex items-center gap-3 "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 7.82843C20 7.298 19.7893 6.78929 19.4142 6.41421L15.5858 2.58579C15.2107 2.21071 14.702 2 14.1716 2L6 2C4.89543 2 4 2.89543 4 4L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.82843ZM15.25 11.25C15.9404 11.25 16.5 10.6904 16.5 10C16.5 9.30965 15.9404 8.75 15.25 8.75H8.75C8.05965 8.75 7.5 9.30965 7.5 10C7.5 10.6904 8.05965 11.25 8.75 11.25H15.25ZM8.75 16.25C8.05965 16.25 7.5 15.6904 7.5 15C7.5 14.3096 8.05965 13.75 8.75 13.75H13.25C13.9404 13.75 14.5 14.3096 14.5 15C14.5 15.6904 13.9404 16.25 13.25 16.25H8.75Z"
                  fill="white"
                />
              </svg>
              Hire Me
            </TimelineAnimation>
          </div>
          <TimelineAnimation
            once={true}
            as="p"
            animationNum={7}
            timelineRef={timelineRef}
            className="max-w-md text-neutral-100 text-xl font-light leading-relaxed"
          >
            We are a full-stack agency creating captivating web experiences,
            driving e-commerce growth, and maximizing digital impact.
          </TimelineAnimation>
        </div>
      </div>
      {/* Footer Info */}
      <div className="relative z-10 p-12 flex flex-wrap justify-end items-end">
        <TimelineAnimation
          once={true}
          animationNum={8}
          timelineRef={timelineRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 bg-black/20 backdrop-blur-lg p-4 rounded-lg"
        >
          <TimelineAnimation
            once={true}
            animationNum={9}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">Web Design</p>
            <p className="text-neutral-300 text-xs">Ecommerce Design</p>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            animationNum={10}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">Social Media Marketing</p>
            <p className="text-neutral-300 text-xs">Email Marketing</p>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            animationNum={11}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">
              Conversion Rate Optimization
            </p>
            <p className="text-neutral-300 text-xs">Paid Traffic & Ad</p>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            animationNum={12}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">User Generated Content</p>
            <p className="text-neutral-300 text-xs">and more</p>
          </TimelineAnimation>
        </TimelineAnimation>
      </div>
    </section>
  );
};
