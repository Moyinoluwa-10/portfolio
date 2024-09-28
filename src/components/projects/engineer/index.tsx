"use client";
import { useState } from "react";
import AdjustableRamp from "./info/adjustable-ramp";
import FixedRamp from "./info/fixed-ramp";
import BikeFrame from "./info/bike-frame";

export default function EngineerProjects() {
  const [project, setProject] = useState("adjustable-ramp");

  return (
    <div>
      <div className="px-5">
        <div className="mx-auto w-fit bg-alt-4 flex items-center gap-4 rounded-2xl py-4 px-5 dark:text-primary-100 font-semibold">
          <span
            className={`cursor-pointer transition-all duration-200 ${
              project === "adjustable-ramp"
                ? "text-alt-2 scale-125"
                : "scale-100"
            }`}
            onClick={() => setProject("adjustable-ramp")}
          >
            01
          </span>
          <span
            className={`cursor-pointer transition-all duration-200 ${
              project === "fixed-ramp" ? "text-alt-2 scale-125" : "scale-100"
            }`}
            onClick={() => setProject("fixed-ramp")}
          >
            02
          </span>
          <span
            className={`cursor-pointer transition-all duration-200 ${
              project === "bike-frame" ? "text-alt-2 scale-125" : "scale-100"
            }`}
            onClick={() => setProject("bike-frame")}
          >
            03
          </span>
        </div>
      </div>

      {
        {
          "adjustable-ramp": <AdjustableRamp />,
          "fixed-ramp": <FixedRamp />,
          "bike-frame": <BikeFrame />,
        }[project]
      }
    </div>
  );
}
