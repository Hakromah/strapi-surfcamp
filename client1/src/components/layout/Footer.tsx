"use client";

import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import type { LinkProps, LogoProps } from "@/types";

interface FooterProps {
	data: {
		logo: LogoProps;
		navigation: LinkProps[];
		policies: LinkProps[];
		copy: string;
	};
}

export function Footer({ data }: FooterProps) {
	if (!data) return null;

	const { logo, navigation, policies, copy } = data;

	return (
		<footer className="w-full border-t bg-black text-white">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:gap-0">
				{/* Logo + Navigation */}
				<div className="flex gap-6 flex-row items-center justify-center md:items-start">
					<StrapiImage
						src={logo.image.url}
						alt={logo.image.alternativeText || "Footer logo"}
						width={100}
						height={100}
						className="mb-4 w-24 h-auto object-contain"
					/>

					<ul className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
						{navigation.map((item) => (
							<li key={item.id}>
								<Link
									href={item.href}
									target={item.isExternal ? "_blank" : "_self"}
									className="text-sm font-medium flex text-gray-300 transition-colors hover:text-primary"
								>
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Policies + Copyright */}
				<div className="flex flex-col items-center gap-4 text-center md:items-end md:text-right">
					<ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
						{policies.map((item) => (
							<li key={item.id}>
								<Link
									href={item.href}
									target={item.isExternal ? "_blank" : "_self"}
									className="transition-colors hover:text-primary"
								>
									{item.text}
								</Link>
							</li>
						))}
					</ul>

					<p className="text-sm text-gray-500">
						&copy; {new Date().getFullYear()} {copy}
					</p>
				</div>
			</div>
		</footer>
	);
}
