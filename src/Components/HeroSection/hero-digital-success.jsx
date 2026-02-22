import React, { Suspense, useRef, useState, useEffect } from "react";
import tlogo from "../HeroSection/logo.png";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { TimelineAnimation } from "@/components/timeline-animation";
import { useMediaQuery } from "@/components/use-media-query";
import MotionDrawer from "@/components/motion-drawer";

const WORDS = ["Frontend", "Salesforce"];

const GLITCH_CSS = `
  @keyframes glitchOut {
    0%   { opacity:1; transform:translate(0,0) skewX(0deg); clip-path:inset(0 0 0 0); filter:brightness(1) hue-rotate(0deg); }
    8%   { transform:translate(-5px,1px) skewX(-4deg); clip-path:inset(12% 0 78% 0); filter:brightness(1.6) hue-rotate(25deg); }
    18%  { transform:translate(5px,-1px) skewX(4deg); clip-path:inset(62% 0 20% 0); filter:brightness(0.7) hue-rotate(-20deg); }
    28%  { transform:translate(-3px,2px) skewX(-2deg); clip-path:inset(35% 0 48% 0); filter:brightness(1.4) hue-rotate(40deg); }
    40%  { transform:translate(5px,-2px) skewX(4deg); clip-path:inset(80% 0 6% 0); filter:brightness(1.9) hue-rotate(-35deg); }
    55%  { transform:translate(-6px,1px) skewX(-5deg); clip-path:inset(46% 0 36% 0); filter:brightness(0.5) hue-rotate(60deg); opacity:0.55; }
    72%  { opacity:0.25; transform:translate(3px,0); clip-path:inset(22% 0 58% 0); filter:brightness(1.2); }
    100% { opacity:0; transform:translate(0,0) skewX(0deg); clip-path:inset(0 0 0 0); filter:brightness(1) hue-rotate(0deg); }
  }
  @keyframes glitchIn {
    0%   { opacity:0; transform:translate(0,0) skewX(0deg); clip-path:inset(0 0 0 0); filter:brightness(1) hue-rotate(0deg); }
    12%  { opacity:0.2; transform:translate(6px,-2px) skewX(5deg); clip-path:inset(70% 0 14% 0); filter:brightness(1.9) hue-rotate(-30deg); }
    26%  { opacity:0.45; transform:translate(-5px,1px) skewX(-4deg); clip-path:inset(24% 0 60% 0); filter:brightness(1.4) hue-rotate(20deg); }
    42%  { opacity:0.68; transform:translate(4px,-1px) skewX(3deg); clip-path:inset(54% 0 28% 0); filter:brightness(1.2) hue-rotate(-15deg); }
    58%  { opacity:0.82; transform:translate(-3px,1px) skewX(-2deg); clip-path:inset(18% 0 66% 0); filter:brightness(1.3) hue-rotate(10deg); }
    75%  { opacity:0.93; transform:translate(1px,0) skewX(1deg); filter:brightness(1.1) hue-rotate(-5deg); }
    88%  { opacity:0.98; transform:translate(-1px,0); }
    100% { opacity:1; transform:translate(0,0) skewX(0deg); clip-path:inset(0 0 0 0); filter:brightness(1) hue-rotate(0deg); }
  }
  @keyframes glitchRed {
    0%   { opacity:0; clip-path:inset(0 0 0 0); transform:translate(0,0); }
    8%   { opacity:1; transform:translate(-7px,0); clip-path:inset(14% 0 72% 0); }
    22%  { transform:translate(5px,1px); clip-path:inset(58% 0 18% 0); }
    38%  { transform:translate(-9px,-1px); clip-path:inset(32% 0 43% 0); }
    54%  { transform:translate(6px,0); clip-path:inset(76% 0 6% 0); }
    70%  { opacity:1; transform:translate(-5px,1px); clip-path:inset(42% 0 38% 0); }
    88%  { opacity:0.3; transform:translate(2px,0); clip-path:inset(10% 0 80% 0); }
    100% { opacity:0; clip-path:inset(0 0 0 0); transform:translate(0,0); }
  }
  @keyframes glitchCyan {
    0%   { opacity:0; clip-path:inset(0 0 0 0); transform:translate(0,0); }
    8%   { opacity:1; transform:translate(7px,0); clip-path:inset(72% 0 14% 0); }
    22%  { transform:translate(-5px,-1px); clip-path:inset(18% 0 58% 0); }
    38%  { transform:translate(9px,1px); clip-path:inset(43% 0 32% 0); }
    54%  { transform:translate(-6px,0); clip-path:inset(6% 0 76% 0); }
    70%  { opacity:1; transform:translate(5px,-1px); clip-path:inset(62% 0 20% 0); }
    88%  { opacity:0.3; transform:translate(-2px,0); clip-path:inset(80% 0 10% 0); }
    100% { opacity:0; clip-path:inset(0 0 0 0); transform:translate(0,0); }
  }
`;

export const HeroDigitalSuccess = () => {
  const timelineRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [wordIndex, setWordIndex] = useState(0);
  const [animState, setAnimState] = useState("idle"); // "idle" | "glitch-out" | "glitch-in"

  useEffect(() => {
    const GLITCH_DURATION = 550;
    const interval = setInterval(() => {
      setAnimState("glitch-out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setAnimState("glitch-in");
        setTimeout(() => setAnimState("idle"), GLITCH_DURATION);
      }, GLITCH_DURATION);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col"
    >
      <style>{GLITCH_CSS}</style>
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
          {/* Glitch word switcher */}
          <span style={{ position: "relative", display: "inline-block" }}>
            {/* Red chromatic-aberration ghost */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "#ff003c",
                opacity: animState !== "idle" ? 1 : 0,
                animation:
                  animState !== "idle"
                    ? "glitchRed 0.55s ease-in-out forwards"
                    : "none",
                willChange: "transform, clip-path",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {WORDS[wordIndex]}
            </span>
            {/* Cyan chromatic-aberration ghost */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "#00e5ff",
                opacity: animState !== "idle" ? 1 : 0,
                animation:
                  animState !== "idle"
                    ? "glitchCyan 0.55s ease-in-out forwards"
                    : "none",
                willChange: "transform, clip-path",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {WORDS[wordIndex]}
            </span>
            {/* Main gradient text */}
            <span
              className="bg-clip-text text-transparent bg-linear-to-r from-white via-red-500 to-red-500 pb-0 xl:inline-block block"
              style={{
                display: "inline-block",
                animation:
                  animState === "glitch-out"
                    ? "glitchOut 0.55s ease-in forwards"
                    : animState === "glitch-in"
                      ? "glitchIn 0.55s ease-out forwards"
                      : "none",
                willChange: "transform, opacity, clip-path, filter",
              }}
            >
              {WORDS[wordIndex]}
            </span>
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
