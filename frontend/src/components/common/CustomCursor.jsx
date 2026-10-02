
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const followerRef = useRef(null);


useEffect(() => {
  // Mobile/touch devices par cursor effect nahi
  if (window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  const dot = dotRef.current;
  const follower = followerRef.current;

  // Dot fast follow karega
  const moveDot = gsap.quickTo(dot, "x", {
    duration: 0.15,
    ease: "power3.out",
  });

  const moveDotY = gsap.quickTo(dot, "y", {
    duration: 0.15,
    ease: "power3.out",
  });

  // Circle intentionally slow rahega
  const moveFollower = gsap.quickTo(follower, "x", {
    duration: 1.2,
    ease: "power3.out",
  });

  const moveFollowerY = gsap.quickTo(follower, "y", {
    duration: 1.2,
    ease: "power3.out",
  });

  const moveCursor = (e) => {
    // Small dot
    moveDot(e.clientX);
    moveDotY(e.clientY);

    // Large circle - mouse ke peeche
    moveFollower(e.clientX);
    moveFollowerY(e.clientY);
  };

  const handleMouseEnter = () => {
    gsap.to([dot, follower], {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to([dot, follower], {
      opacity: 0,
      duration: 0.3,
    });
  };

  window.addEventListener("mousemove", moveCursor);

  document.documentElement.addEventListener(
    "mouseenter",
    handleMouseEnter
  );

  document.documentElement.addEventListener(
    "mouseleave",
    handleMouseLeave
  );

  return () => {
    window.removeEventListener("mousemove", moveCursor);

    document.documentElement.removeEventListener(
      "mouseenter",
      handleMouseEnter
    );

    document.documentElement.removeEventListener(
      "mouseleave",
      handleMouseLeave
    );
  };
}, []);


  return (
    <>
      {/* Small center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500 opacity-0 shadow-[0_0_12px_rgba(132,204,22,0.8)]"
      />

      {/* Smooth follower */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-500/50 opacity-0 shadow-[0_0_25px_rgba(132,204,22,0.15)]"
      />
    </>
  );
};

export default CustomCursor;

