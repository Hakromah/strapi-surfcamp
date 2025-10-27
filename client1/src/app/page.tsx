import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
	const data = await getHomePage();
	if (!data) notFound();

	console.log(data);
	return { ...data };
}
export default async function HomeRoute() {
	const data = await loader();

	const blocks = data.blocks || [];

	console.dir(data, { depth: null });
	return (
		<div>
			<HeroSection {...blocks[0]} />
			<InfoBlock {...blocks[1]} />
			<InfoBlock {...blocks[2]} />
		</div>
	);
}

// import { FeaturedArticle } from "@/components/blocks/FeaturedArticle";
// import { HeroSection } from "@/components/blocks/HeroSection";
// import { InfoBlock } from "@/components/blocks/InfoBlock";
// import { getHomePage } from "@/data/loaders";
// import { notFound } from "next/navigation";

// async function loader() {
// 	const data = await getHomePage();
// 	if (!data) notFound();
// 	return data;
// }

// export default async function HomeRoute() {
// 	const data = await loader();
// 	const blocks = data?.blocks || [];

// 	return (
// 		<div>
// 			{blocks.map((block, index) => {
// 				switch (block.__component) {
// 					case "blocks.hero-section":
// 						return <HeroSection key={block.id} {...block} />;

// 					case "blocks.info-block":
// 						return <InfoBlock key={block.id} {...block} index={index} />;

// 					default:
// 						return null;
// 				}
// 			})}
// 		</div>
// 	);
// }
