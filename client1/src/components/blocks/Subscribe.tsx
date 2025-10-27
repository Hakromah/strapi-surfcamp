"use client";
import type { SubscribeProps } from "@/types";

export function Subscribe({
	headline,
	content,
	placeholder,
	buttonText,
}: Readonly<SubscribeProps>) {
	return (
		<section className="w-full h-[40%] bg-orange flexmd:flex-row items-center justify-center p-8 md:p-16 gap-8">

			<div className="">
				<h4>{headline}</h4>
				<p className="copy">{content}</p>
			</div>
			<form className="flex items-center justify-center gap-4 ">
				<input
					name="email"
					type="email"
					placeholder={placeholder}

				/>
				<button
					type="submit"
					className=" btn btn--turquoise btn--medium"
				>
					{buttonText}
				</button>
			</form>
		</section>
	);
}
