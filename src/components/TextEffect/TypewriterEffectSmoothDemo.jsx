"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Unlock",
    },
    {
      text: "travel",
    },
    {
      text: "insights",
    },
    {
      text: "instantly",
    },
    {
        text: "with",
    },
    {
        text: "our",
    },
    {
        text: "chatbot,",
    },
    {
      text: "your ultimate trip companion.",
      className: "text-black",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
