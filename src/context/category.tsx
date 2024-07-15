"use client";
import { createContext, useContext, useEffect, useState } from "react";

type CategoryContextType = {
  category: string;
  setCategoryToEngineer: () => void;
  setCategoryToDeveloper: () => void;
};

type Props = {
  children: React.ReactNode;
};

const CategoryContextDefaultValues: CategoryContextType = {
  category: "engineer",
  setCategoryToEngineer: () => {},
  setCategoryToDeveloper: () => {},
};

const CategoryContext = createContext<CategoryContextType>(
  CategoryContextDefaultValues
);

export function useCategory() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }: Props) {
  const [category, setCategory] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("category");
      return storedValue ? storedValue : "engineer";
    }
    return "engineer";
  });

  useEffect(() => {
    if (!localStorage.getItem("category")) {
      setCategory("engineer");
    }
  }, []);

  const setCategoryToEngineer = () => {
    setCategory("engineer");
    localStorage.setItem("category", "engineer");
  };

  const setCategoryToDeveloper = () => {
    setCategory("developer");
    localStorage.setItem("category", "developer");
  };

  const value = {
    category,
    setCategoryToEngineer,
    setCategoryToDeveloper,
  };

  return (
    <>
      <CategoryContext.Provider value={value}>
        {children}
      </CategoryContext.Provider>
    </>
  );
}
