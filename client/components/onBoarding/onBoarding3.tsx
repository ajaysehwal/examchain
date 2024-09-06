import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const OnBoarding3 = () => {
  return (
    <div>
      <form>
        <div className="mb-5">
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            School Name
          </Label>
          <Input type="text" id="name" placeholder="Enter your full name" />
        </div>
        <div className="mb-5">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            School Email
          </Label>
          <Input type="email" id="email" placeholder="info@school.edu.gh" />
        </div>
        <div className="mb-5">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            School Address
          </Label>
          <Input
            type="text"
            id="address"
            placeholder="123 Craig Crescent, Dallas Texas, USA"
          />
        </div>
        <div className="mb-5">
          <Label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </Label>
          <Input type="tel" id="phone" placeholder="+233594045146" />
        </div>
      </form>
    </div>
  );
};

export default OnBoarding3;
