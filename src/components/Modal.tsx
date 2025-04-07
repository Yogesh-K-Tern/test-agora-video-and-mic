import React, { useEffect, useState } from "react";
import { X } from "react-feather";

import useClickOutside from "@/hooks/useClickOutside";

import { Button } from "@/ui/Button/Button";

interface iModal {
  isOpen: boolean;
  onClose: () => void;
  alignment?: "center" | "left" | "right";
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, alignment = "center", children }: iModal) {
  // Local state to trigger animation on mount.
  const [animate, setAnimate] = useState(false);
  const outSideClickRef = useClickOutside(onClose);

  useEffect(() => {
    // When the modal mounts, trigger the animation.
    setAnimate(true);
  }, []);

  if (!isOpen) return null;

  // Container alignment classes.
  const containerClasses = {
    center: "items-center justify-center",
    left: "items-center justify-start",
    right: "items-center justify-end",
  }[alignment];

  // Initial transform classes for each alignment.
  let initialTransform = "";
  if (alignment === "left") {
    initialTransform = "-translate-x-full";
  } else if (alignment === "right") {
    initialTransform = "translate-x-full";
  } else {
    initialTransform = "scale-95 opacity-0";
  }

  // Once mounted, animate to the final state.
  const transformClass = animate
    ? "translate-x-0 scale-100 opacity-100"
    : initialTransform;

  return (
    <div className="fixed inset-0 z-50 flex !text-black">
      {/* Backdrop with fade effect */}
      <div
        className="absolute inset-0 bg-black opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className={`relative flex ${containerClasses} w-full h-full p-4`}>
        <div
          ref={outSideClickRef}
          className={`bg-white px-6 pt-5 rounded-2xl shadow-lg transform transition-all duration-300 ${transformClass} max-w-[625px]`}
        >
          {/* header */}
          <div className="flex items-center justify-between text-[16px] font-semibold">
            <div>Need help?</div>
            <Button
              onClick={onClose}
              icon={X}
              iconPosition="center"
              buttonStyle="flush"
            />
          </div>
          <hr className="mx-[-24px]" />

          {/* body */}
          <div className="py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
