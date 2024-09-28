"use client";
// import "@google/model-viewer";
import Image from "next/image";
import image1 from "@/assets/images/projects/ramp-1.png";
import image2 from "@/assets/images/projects/ramp-2.jpg";
import { useEffect } from "react";

export default function FixedRamp() {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  return (
    <div className="pt-12 pb-16">
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid place-items-center mb-6 bg-alt-4 h-[400px]">
          <model-viewer
            src="/fixed-ramp.glb"
            alt="A 3D model of an fixed ramp"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
            style={{ width: "100%", height: "100%" }}
          ></model-viewer>
        </div>
        <h3 className="mb-7 text-xl font-semibold">
          Fixed 3D-Printed Ramp with Connector for Robotic Transportation
        </h3>
      </div>
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <p>
            This 3D-printed fixed ramp is designed with a robust, extended
            connector that securely attaches to a robot using screws. The ramp
            plays a crucial role in facilitating efficient transportation
            between a smaller robot and a carrier robot. Its fixed incline
            provides a stable path, allowing smooth transfer of objects or the
            small robot itself, ensuring seamless integration between the two
            robotic systems.
            <br />
            The extended connector is precisely engineered to align with the
            robot's mounting points, offering a secure and reliable attachment.
            This ensures that the ramp remains in place during operation, even
            under varying loads or conditions. The fixed angle of the ramp is
            optimized for stability and ease of transport, reducing the risk of
            slippage or misalignment during the transfer process.
          </p>
          <Image src={image1} alt="adjustable ramp" />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Image src={image2} alt="adjustable ramp" />
          <p>
            This design highlights the practicality of 3D printing for creating
            custom robotic components, enhancing the functionality and
            interaction between multiple robotic systems. It enables smooth,
            reliable, and efficient transportation, making it an essential
            component in multi-robot operations.
          </p>
        </div>
      </div>
    </div>
  );
}
