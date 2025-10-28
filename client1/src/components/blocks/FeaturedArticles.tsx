import Link from "next/link";
import { StrapiImage } from "@/components/StrapiImage";
import ReactMarkdown from "react-markdown";
import { FeaturedArticlesProps } from "@/types";

export function FeaturedArticle({
	headline,
	link,
	excerpt,
	image,
}: Readonly<FeaturedArticlesProps>) {
	const buttonStyle = "inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/50";

	return (
		<article className="container mx-auto px-4 pt-24 pb-16 lg:pb-24 max-w-7xl">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				{/* Article Info Section */}
				<div className="space-y-6 lg:space-y-8">
					<h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">{headline}</h3>
					<div className="text-gray-600 text-lg">
						<ReactMarkdown>{excerpt}</ReactMarkdown>
					</div>
					<Link href={link.href} className={buttonStyle}>
						{link.text}
					</Link>
				</div>
				<div className="shadow-2xl rounded-xl overflow-hidden aspect-square lg:aspect-video h-full">
					<StrapiImage
						src={image.url}
						alt={image.alternativeText || "No alternative text provided"}
						height={400}
						width={600}
					/>
				</div>
			</div>
		</article>
	);
}
