// components/BottomNav.tsx
"use client"

import { Home, Boxes, FileBox } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface BottomNavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const BottomNav: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after component mounts on client
  }, []);

  const router = useRouter();

  const menuItems: BottomNavItem[] = [
    { icon: <FileBox />, label: "Supply", path: "/" },
    { icon: <Home />, label: "Home", path: "/" },
    { icon: <Boxes />, label: "Product", path: "/product" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-black border-gray-200 shadow-xl flex justify-around py-2">
      {menuItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="flex flex-col items-center text-gray-600 hover:text-black"
          onClick={() => router.push(item.path)}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default BottomNav;
