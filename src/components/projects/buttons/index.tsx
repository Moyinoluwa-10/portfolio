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
    <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
      <Button
        inactive={category === "developer"}
        onClick={() => {
          setCategoryToDeveloper();
        }}
      >
        Developer
      </Button>
      <Button
        inactive={category === "engineer"}
        onClick={() => {
          setCategoryToEngineer();
        }}
      >
        Engineer
      </Button>
    </div>
  );
};

export default Buttons;
