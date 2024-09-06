import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const OnBoarding2 = () => {
  return (
    <div>
      <form>
        <div className="mb-5">
          <Label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </Label>
          <Input
            type="text"
            id="first-name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-5">
          <Label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </Label>
          <Input type="text" id="last-name" placeholder="info@school.edu.gh" />
        </div>
        <div className="mb-5">
          <Label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number{" "}
            <span className="text-xs text-muted-foreground">
              (Principal&apos;s office)
            </span>
          </Label>
          <Input type="tel" id="phone" placeholder="+233594045146" />
        </div>
      </form>
    </div>
  );
};

export default OnBoarding2;
