"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LogoProps, LinkProps } from "@/types";

interface HeaderProps {
	data: {
		logo: LogoProps;
		navigation: LinkProps[];
		cta: LinkProps;
	};
}

export function Header({ data }: HeaderProps) {
	const pathname = usePathname();
	const headerLight = pathname === "/experience";

	if (!data) return null;

	const { logo, navigation, cta } = data;

	return (
		<header
			className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 mb-4 h-[var(--header-height)] ${headerLight
				? "bg-orange-400 text-white border-b-amber-800"
				: "bg-black text-white border-transparent"
				}`}
		>
			<div className="mx-auto flex max-w-[1920px] w-full items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<StrapiImage
						src={logo.image.url}
						alt={logo.image.alternativeText || "Logo"}
						width={120}
						height={120}
						className="h-auto w-28 object-contain rounded-[45%]"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{navigation.map((item) => (
						<Link
							key={item.id}
							href={item.href}
							target={item.isExternal ? "_blank" : "_self"}
							className="text-2xl font-bold tracking-wide transition-colors hover:text-primary"
						>
							{item.text}
						</Link>
					))}
				</nav>

				{/* CTA Button (Desktop) */}
				<div className="hidden md:block">
					<Link
						href={cta.href}
						target={cta.isExternal ? "_blank" : "_self"}
					>
						<Button
							size="sm"
							variant={headerLight ? "default" : "secondary"}
							className="rounded-xl"
						>
							{cta.text}
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Trigger */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden text-current hover:bg-transparent"
						>
							<Menu className="h-5 w-5" />
						</Button>
					</SheetTrigger>

					{/* Mobile Drawer Content */}
					<SheetContent side="right" className="flex flex-col gap-6 pt-16">
						{navigation.map((item) => (
							<Link
								key={item.id}
								href={item.href}
								target={item.isExternal ? "_blank" : "_self"}
								className="text-lg font-medium"
							>
								{item.text}
							</Link>
						))}
						<Link
							href={cta.href}
							target={cta.isExternal ? "_blank" : "_self"}
						>
							<Button className="w-full mt-4">{cta.text}</Button>
						</Link>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
