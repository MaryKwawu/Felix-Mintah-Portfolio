"use client";
import React from "react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "about",
		path: "/about",
	},
	{
		name: "skill",
		path: "/skill",
	},
	{
		name: "roadmap",
		path: "/roadmap",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<div className="mt-32 mb-40 text-center text-2xl text-[#e9e1cf]">
					<Link href={"/"}>
						<h1 className="text-4xl font-semibold">
							{" "}
							<span className="text-accent">.</span>Felix Mintah
						</h1>
					</Link>
				</div>
				{/* nav */}
				<nav className="flex flex-col justify-center items-center gap-7 text-[#ffffff]">
					{links.map((link, index) => {
						return (
							<div key={index}>
								<Link
									href={link.path}
									className={`${
										link.path === pathname &&
										"text-accent border-b-2 border-accent"
									}text-xl capitalize hover:text-accent transition-all`}>
									{link.name}
								</Link>
							</div>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
