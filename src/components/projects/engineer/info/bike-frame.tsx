import Image from "next/image";
import image1 from "@/assets/images/projects/bike.png";
import EngineerProjectTemplate from "./template";

export default function BikeFrame() {
  return (
    <EngineerProjectTemplate
      src="/bike-frame.glb"
      title="Bike Frame Designed in SolidWorks"
    >
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
          The use of SolidWorks allowed for precise control over every aspect of
          the frame, from tube thickness to joint placement, ensuring that the
          design meets both aesthetic and functional requirements.
        </p>
        <Image src={image1} alt="adjustable ramp" />
      </div>
    </EngineerProjectTemplate>
  );
}
