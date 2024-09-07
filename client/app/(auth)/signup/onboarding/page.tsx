"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import LogoSvg from "@/public/Logo-svg-white.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import OnBoarding2 from "@/components/onBoarding/onBoarding2";
import OnBoarding3 from "@/components/onBoarding/onBoarding3";

const SignUp = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  const onBoardingTitles = {
    onBoarding1: {
      title: "What do you want to sign up as?",
    },
    onBoarding2: {
      title: "Let's get to know you",
    },
    onBoarding3: {
      title: "Tell us about your school",
    },
  };

  const handleClick = () => {
    if (step !== 3) {
      return setStep(step + 1);
    }
    return;
  };
  return (
    <div className="container  h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-5 rounded-2xl flex-1 flex h-full max-h-[1024px]">
          <div className="flex-[0.5] justify-between shadow-md bg-gradient-to-b from-[#1353C0] to-[#005EFF] flex flex-col text-white rounded-lg h-full max-h-[1000px] py-2 px-10">
            <Button asChild variant="ghost" className="w-min ">
              <Link href="/" className="space-x-1 flex items-center">
                <Image
                  src={LogoSvg}
                  priority
                  width={50}
                  height={50}
                  alt="logo-svg"
                  className="w-7 h-7"
                />
                <span className="font-bold text-xl">ExamChain</span>
              </Link>
            </Button>

            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">Creating your account</h2>
              <span className="font-light space-y-5 flex flex-col max-w-[503px]">
                <p>
                  Let&apos;s create a personalized ExamChain experience for your
                  school
                </p>
              </span>
            </div>
            <div className="h-72"></div>
          </div>
          <div className="flex flex-col flex-1 bg-white justify-center items-center shadow-md">
            <div className="w-full max-w-[400px] flex flex-col space-y-10">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">{step}/3</span>
                <h2 className="text-xl font-bold">
                  {step === 1
                    ? onBoardingTitles.onBoarding1.title
                    : onBoardingTitles.onBoarding2.title}
                </h2>
              </div>

              {step === 1 ? (
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="principal@school.edu.gh"
                    onChange={(e) => setEmail(e?.target?.value)}
                  />
                </div>
              ) : step === 2 ? (
                <OnBoarding2 />
              ) : (
                <OnBoarding3 />
              )}
              <Button className="w-full py-6" onClick={handleClick}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
