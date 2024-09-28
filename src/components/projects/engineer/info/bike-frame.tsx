import "@google/model-viewer";
import Image from "next/image";
import image1 from "@/assets/images/projects/bike.png";

export default function BikeFrame() {
  return (
    <div className="pt-12 pb-16">
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid place-items-center mb-6 bg-alt-4 h-[400px]">
          <model-viewer
            src="/bike-frame.glb"
            alt="A 3D model of an bike frame"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
            style={{ width: "100%", height: "100%" }}
          ></model-viewer>
        </div>
        <h3 className="mb-7 text-xl font-semibold">
          Custom Bike Frame Designed in SolidWorks
        </h3>
      </div>
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <p>
            This bike frame was designed using SolidWorks, following a
            step-by-step tutorial to achieve a robust and functional design. The
            frame incorporates key structural elements that ensure strength,
            durability, and ergonomic support for optimal performance. With
            careful attention to geometry and load distribution, the design aims
            to provide a balance of lightweight construction and structural
            integrity, making it suitable for various cycling conditions.
            <br />
            The use of SolidWorks allowed for precise control over every aspect
            of the frame, from tube thickness to joint placement, ensuring that
            the design meets both aesthetic and functional requirements.
          </p>
          <Image src={image1} alt="adjustable ramp" />
        </div>
      </div>
    </div>
  );
}
