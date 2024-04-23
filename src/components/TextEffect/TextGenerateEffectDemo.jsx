"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Welcome to VoyageVista - Where every horizon holds a new adventure! Explore, plan, and experience the world like never before with our intuitive travel platform.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
