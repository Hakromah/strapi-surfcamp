"use client";
import type { SubscribeProps } from "@/types";

export function Subscribe({
	headline,
	content,
	placeholder,
	buttonText,
}: Readonly<SubscribeProps>) {
	const buttonStyle =
		"inline-flex items-center justify-center rounded-lg ml-3 bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 h-12";
	const inputStyle = "flex-1 min-w-0 h-12 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-150 ease-in-out";
	return (

		<section className="container mx-auto px-4 my-16 max-w-5xl">
			{/* Container with rounded, light background matching the screenshot */}
			<div className="bg-amber-50/70 p-8 lg:p-12 rounded-3xl shadow-xl border border-amber-100">
				<div className="grid lg:grid-cols-2 gap-8 items-center">
					{/* Text Content */}
					<div className="space-y-3">
						<h4 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900">{headline}</h4>
						<p className="text-gray-700 text-base lg:pr-8">{content}</p>
					</div>
					<form className="flex w-full mt-4 lg:mt-0">
						<input
							name="email"
							type="email"
							placeholder={placeholder}
							className={inputStyle}
							aria-label="Email address for newsletter"
						/>
						<button
							type="submit"
							className={buttonStyle}>
							{buttonText}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
