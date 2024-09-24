import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [overViewportHeight, setOverViewportHeight] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollY / (scrollHeight - clientHeight)) * 100;

    if (scrollPercentage > 16.1) {
      // ScrollY has exceeded 100%
      setOverViewportHeight(true);
    } else {
      setOverViewportHeight(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center py-4 px-8 sticky top-0 ${
        overViewportHeight ? "bg-white" : "bg-[#EAF3FA]"
      } z-50`}
    >
      <a href="/">
        <img src={Logo} alt="logo" className="h-10 w-10" />
      </a>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost">
                <a href="#products">Products</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <a href="#solutions">Solutions</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <a href="#community">Community</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <a href="#resources">Resources</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">Pricing</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">Contact</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex justify-center items-center gap-4">
        <Button variant="outline">Sign In</Button>
        <Button>Register</Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-8 justify-center items-center">
            <SheetTitle className="hover:text-slate-500 duration-200">
              <SheetClose asChild>
                <a href="#products">Products</a>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="hover:text-slate-500 duration-200">
              <SheetClose asChild>
                <a href="#solutions">Solutions</a>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="hover:text-slate-500 duration-200">
              <SheetClose asChild>
                <a href="#community">Community</a>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="hover:text-slate-500 duration-200">
              <SheetClose asChild>
                <a href="#resources">Resources</a>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="hover:text-slate-500 duration-200 cursor-pointer">
              Pricing
            </SheetTitle>
            <SheetTitle className="hover:text-slate-500 duration-200 cursor-pointer">
              Contact
            </SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
