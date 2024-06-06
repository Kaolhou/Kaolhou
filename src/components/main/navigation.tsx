"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ToggleTheme from "./toggle-theme";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="justify-between flex w-screen mt-1 md:px-20">
        <div className="w-[52px] md:w-[100px]"></div>
        <div className="flex justify-center">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/posts"
              className={navigationMenuTriggerStyle()}
            >
              Posts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
        <ToggleTheme />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
