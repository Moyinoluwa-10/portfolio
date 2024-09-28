import "@google/model-viewer";
import image2 from "@/assets/images/projects/adjustable-ramp-2.png";
import Image from "next/image";

export default function AdjustableRamp() {
  return (
    <div className="pt-12 pb-16">
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid place-items-center mb-6 bg-alt-4 h-[400px]">
          <model-viewer
            src="/adjustable-ramp.glb"
            alt="A 3D model of an adjustable ramp"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
            style={{ width: "100%", height: "100%" }}
          ></model-viewer>
        </div>
        <h3 className="mb-7 text-xl font-semibold">
          Adjustable 3D-Printed Ramp for Incline Stability Testing
        </h3>
      </div>
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <p>
            This adjustable ramp was meticulously designed and 3D-printed to
            test the maximum incline angle at which an object (a robot) can move
            upwards without tipping over. The ramp features a customizable
            incline, allowing for angle adjustments to evaluate the stability
            and tipping point of various objects under controlled conditions.
            <br />
            By gradually increasing the ramp's angle, users can determine the
            critical threshold at which an object maintains stability or begins
            to tip. The ramp's adjustable nature makes it a versatile tool for
            experiments and simulations that require testing of different
            incline angles and object dynamics.
            <br />
            Constructed from durable, lightweight materials, the ramp offers
            both portability and strength, ensuring consistent performance
            across multiple tests. Its smooth surface guarantees minimal
            interference during movement, while the modular adjustment mechanism
            allows for easy angle modifications without compromising on
            stability.
          </p>
          <Image src={image2} alt="adjustable ramp" />
        </div>
      </div>
    </div>
  );
}
