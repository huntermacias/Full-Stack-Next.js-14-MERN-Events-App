import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
  } from "@/components/ui/sheet";
  import Image from "next/image";
  import { Separator } from "../ui/separator";
  import NavItems from "./NavItems";
  
  const MobileNav = () => {
	return (
	  <nav className="md:hidden">
		<Sheet>
		  <SheetTrigger className="align-middle">
			<Image 
			  src="/assets/icons/menu.svg" // Consider using a white or light-colored menu icon for dark theme
			  alt="menu"
			  width={24}
			  height={24}
			  className="cursor-pointer"
			/>
		  </SheetTrigger>
		  <SheetContent className="flex flex-col gap-6 bg-gray-900 p-4">
			<Image 
			  src="/assets/images/logo.svg" // Use a logo optimized for dark backgrounds
			  alt="logo"
			  width={128}
			  height={38}
			/>
			<Separator />
			<NavItems  /> {/* Ensure text colors contrast well with the background */}
		  </SheetContent>
		</Sheet>
	  </nav>
	)
  }
  
  export default MobileNav;
  