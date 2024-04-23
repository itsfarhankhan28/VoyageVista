"use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl = "https://res.cloudinary.com/dcjt1og8n/image/upload/v1712096536/TopDestinations/ctv1wsnmyhri6ncuh1nq.jpg"

  console.log(imageUrl)
  return (
    <div className=" relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
