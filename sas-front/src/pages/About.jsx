import React from "react";
import OfficerCard from "../components/OfficerCard";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl py-5 font-semibold text-center">About</h1>

      <div className="h-screen flex flex-col gap-5">
        <div>
          <h1 className="text-center text-lg mb-3">execomm</h1>
          <div className="flex justify-center">
            <OfficerCard />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <OfficerCard />
          <OfficerCard />
        </div>
        <div>
          <h1 className="text-center text-lg mb-3">soccul</h1>
          <div className="flex flex-wrap justify-center gap-5">
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
          </div>
        </div>
        <div>
          <h1 className="text-center text-lg mb-3">resdev</h1>
          <div className="flex flex-wrap justify-center gap-5">
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
          </div>
        </div>
        <div>
          <h1 className="text-center text-lg mb-3">ExaCEC</h1>
          <div className="flex flex-wrap justify-center gap-5">
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
          </div>
        </div>
        <div>
          <h1 className="text-center text-lg mb-3">finance</h1>
          <div className="flex flex-wrap justify-center gap-5">
            <OfficerCard />
            <OfficerCard />
          </div>
        </div>
        <div>
          <h1 className="text-center text-lg mb-3">PRC</h1>
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />
            <OfficerCard />

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
