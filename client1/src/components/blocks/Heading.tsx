import React from "react";
import type { HeadingProps } from "@/types";
export function Heading({ heading, linkId }: Readonly<HeadingProps>) {
	return (
		// The text is large (approx 3XL-4XL), bold, and uses a serif font (like font-serif).
		// 'mt-12' for top margin to match the spacing.
		// 'text-gray-900' for the dark text color.
		<h2
			className="flex justify-center items-center mx-auto w-full max-w-[40%] mt-6 text-gray-900 font-serif font-extrabold text-4xl md:text-5xl"
			id={linkId}
		>
			{heading}
		</h2>
	);
}
