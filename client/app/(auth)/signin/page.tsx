"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import LogoSvg from "@/public/Logo-svg-white.svg";
import Image from "next/image";
import LogoSvg2 from "@/public/Logo-svg.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleClick = () => {
    return router.push("/signup/onboarding");
  };
  return (
    <div className="container  h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-5 rounded-2xl flex-1 flex h-full max-h-[1024px]">
          <div className="justify-between shadow-md bg-gradient-to-b from-[#1353C0] to-[#005EFF] flex flex-col text-white rounded-lg h-full max-h-[1000px] py-2 px-10 flex-[0.5]">
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
              <h2 className="text-2xl font-semibold">Welcome to ExamChain.</h2>
              <span className="font-light space-y-5 flex flex-col max-w-[503px]">
                <p>
                  A centralized platform revolutionizing school assessments.
                </p>
                <p>
                  By streamlining processes and ensuring data security,{" "}
                  <span className="font-bold">ExamChain </span>
                  empowers educators to create, administer, and analyze exams
                  efficiently, fostering fairness and innovation in education.
                </p>
              </span>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col flex-1 bg-white justify-center items-center shadow-md">
            <div className="w-full max-w-[400px] flex flex-col space-y-10">
              <Image
                src={LogoSvg2}
                priority
                width={50}
                height={50}
                alt="logo-svg"
                className="w-14 h-14 mx-auto"
              />
              <span className="flex flex-col space-y-1">
                <h2 className="text-xl font-bold">Log In</h2>
                <p className="text-[#757575] text-sm">
                  Lorem, ipsum dolor sit amet consectetur
                </p>
              </span>
              <div className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="principal@school.edu.gh"
                    onChange={(e) => setEmail(e?.target?.value)}
                    value={email}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e?.target?.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Button className="w-full py-6" onClick={handleClick}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
