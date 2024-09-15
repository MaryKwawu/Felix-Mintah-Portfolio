import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobilenav";

const Header = () => {
	return (
		<header className="py-8 xl:py-4 text-[#b95231]">
			<div className="container mx-auto flex justify-between">
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
				</div>
				{/* logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold text-[#b95231]">
						{" "}
						<span className="text-[#e9e1cf]">.</span>Felix Mintah
					</h1>
				</Link>
				{/* desktop nav & contact me button */}
				<div className="hidden xl:flex items-center gap-8 text-[#b95231]">
					<Link href="/contact">
						<Button>Chat me</Button>
					</Link>
				</div>
				{/* mobile nav  */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
