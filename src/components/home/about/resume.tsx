"use client";
import { useCategory } from "@/context/category";
import { Button } from "@/ui";
import { useEffect, useState } from "react";

type CategoryType = "developer" | "engineer";

const DownloadResume = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { category } = useCategory();
  const resolvedCategory = category as CategoryType;

  if (!mounted) return null;

  return (
    <div>
      {resolvedCategory === "engineer" && (
        <a
          href="Moyinoluwa_Adelowo_Resume_ME.pdf"
          download={"Moyinoluwa_Adelowo_Resume"}
        >
          <Button variant="secondary">Download Resume</Button>
        </a>
      )}
      {resolvedCategory === "developer" && (
        <a
          href="Moyinoluwa_Adelowo_Resume_CS.pdf"
          download={"Moyinoluwa_Adelowo_Resume"}
        >
          <Button variant="secondary">Download Resume</Button>
        </a>
      )}
    </div>
  );
};

export default DownloadResume;
