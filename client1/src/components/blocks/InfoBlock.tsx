import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { StrapiImage } from "../StrapiImage";

import { InfoBlockProps } from "@/types";
import { Button } from "../ui/button";
export function InfoBlock({
	theme,
	reversed,
	headline,
	content,
	image,
	cta,
}: Readonly<InfoBlockProps>) {
	return (
		<section
			className="even:[&_.imageWrapper]:rounded-tl-[46%]
		even:[&_.imageWrapper]:rounded-bl-[46%] odd:[&_.imageWrapper]:rounded-tr-[46%]
		odd:[&_.imageWrapper]:rounded-br-[46%]
		w-full h-full relative mt-12 overflow-hidden odd:[&_.imageWrapper]:max-h-[600px]"
		>
			<div
				className={`flex flex-col md:flex-row container w-full max-w-[1920px] px-0 mx-auto ${
					reversed ? "md:flex-row-reverse" : ""
				} items-center gap-6 my-12`}
			>
				<div className="imageWrapper overflow-hidden flex-1 w-full relative">
					<StrapiImage
						src={image.url}
						alt={image.alternativeText || "No alternative text provided"}
						fill
						className="!relative w-full inset-0 object-cover lg:hover:scale-105 transition-all duration-300 ease-in-out"
					/>
				</div>

				<div
					className={`${
						reversed ? "md:order-1" : "md:order-2"
					} w-full md:w-1/2 flex flex-col gap-4 flex-1`}
				>
					<h2
						className={`text-2xl font-semibold ${
							theme === "turquoise" ? "text-teal-500" : "text-orange-500"
						}`}
					>
						{headline}
					</h2>
					<div className="prose prose-lg text-gray-800">
						<ReactMarkdown>{content}</ReactMarkdown>
					</div>
					{cta && (
						<Link
							href={cta.href}
							target={cta.isExternal ? "_blank" : "_self"}
						>
							<Button
								className={`bg-${
									theme === "turquoise" ? "teal" : "orange"
								}-500 hover:bg-${
									theme === "turquoise" ? "teal" : "orange"
								}-600 text-white font-medium px-6 py-3 rounded-full`}
							>
								{cta.text}
							</Button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}

// export function InfoBlock({
// 	theme,
// 	reversed,
// 	headline,
// 	content,
// 	image,
// 	cta,
// 	index,
// }: Readonly<InfoBlockProps & { index?: number }>) {
// 	const isSecondBlock = index === 2; // 👈 remember: index starts at 0, so 2 means third block
// 	const img = Array.isArray(image) ? image[0] : image;
// 	return (
// 		<section className="w-full h-full relative mt-12 overflow-hidden">
// 			<div
// 				className={`flex flex-col md:flex-row container w-full max-w-[1920px] px-0 mx-auto ${
// 					reversed ? "md:flex-row-reverse" : ""
// 				} items-center gap-6 my-12`}
// 			>
// 				<div
// 					className={`overflow-hidden flex-1 w-full relative ${
// 						isSecondBlock ? "rounded-tr-[30%]" : "rounded-tr-[20%]"
// 					} rounded-br-[20%]`}
// 				>
// 					<StrapiImage
// 						src={img?.url}
// 						alt={
// 							img?.alternativeText || "No alternative text provided"
// 						}
// 						fill
// 						className="!relative w-full h-full inset-0 object-cover lg:hover:scale-105 transition-all duration-300 ease-in-out"
// 					/>
// 				</div>

// 				<div
// 					className={`${
// 						reversed ? "md:order-1" : "md:order-2"
// 					} w-full md:w-1/2 flex flex-col gap-4 flex-1`}
// 				>
// 					<h2
// 						className={`text-2xl font-semibold ${
// 							theme === "turquoise" ? "text-teal-500" : "text-orange-500"
// 						}`}
// 					>
// 						{headline}
// 					</h2>
// 					<div className="prose prose-lg text-gray-800">
// 						<ReactMarkdown>{content}</ReactMarkdown>
// 					</div>
// 					{cta && (
// 						<Link
// 							href={cta.href}
// 							target={cta.isExternal ? "_blank" : "_self"}
// 						>
// 							<Button
// 								className={`bg-${
// 									theme === "turquoise" ? "teal" : "orange"
// 								}-500 hover:bg-${
// 									theme === "turquoise" ? "teal" : "orange"
// 								}-600 text-white font-medium px-6 py-3 rounded-full`}
// 							>
// 								{cta.text}
// 							</Button>
// 						</Link>
// 					)}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
