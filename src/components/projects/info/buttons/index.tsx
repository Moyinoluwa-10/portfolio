"use client";
import { useCategory } from "@/context/category";
import { Button } from "@/ui";
import { useEffect, useState } from "react";

const Buttons = () => {
  const [mounted, setMounted] = useState(false);
  const { category, setCategoryToDeveloper, setCategoryToEngineer } =
    useCategory();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-5 mb-16">
      <Button
        inactive={category === "developer"}
        onClick={() => {
          setCategoryToDeveloper();
          console.log("Changing category to developer");
        }}
      >
        Developer
      </Button>
      <Button
        inactive={category === "engineer"}
        onClick={() => {
          setCategoryToEngineer();
          console.log("Changing category to engineer");
        }}
      >
        Engineer
      </Button>
    </div>
  );
};

export default Buttons;
