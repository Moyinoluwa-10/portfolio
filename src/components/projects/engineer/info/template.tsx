"use client";
import { useEffect } from "react";

type EngineerProjectTemplateProps = {
  src: string;
  title: string;
  children: React.ReactNode;
};

export default function EngineerProjectTemplate({
  src,
  title,
  children,
}: EngineerProjectTemplateProps) {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  return (
    <div className="pt-12 pb-16">
      <div className="container px-5 text-black dark:text-primary-100">
        <div className="grid place-items-center mb-6 bg-alt-4 h-[400px]">
          <model-viewer
            src={src}
            alt={title}
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
            style={{ width: "100%", height: "100%" }}
          ></model-viewer>
        </div>
        <h3 className="mb-7 text-xl font-semibold">{title}</h3>
      </div>
      <div className="container px-5 text-black dark:text-primary-100">
        {children}
      </div>
    </div>
  );
}
