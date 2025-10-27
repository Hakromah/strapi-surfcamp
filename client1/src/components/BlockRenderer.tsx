import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { Subscribe } from "@/components/blocks/Subscribe";
import type { Block } from "@/types";
import { FeaturedArticle } from "./blocks/FeaturedArticles";

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
	if (!blocks?.length) return null;

	return (
		<>
			{blocks.map((block, index) => {
				// Create a guaranteed unique key by combining id and index
				const uniqueKey = `${block.id}-${index}`;

				switch (block.__component) {
					case "blocks.hero-section":
						return <HeroSection key={uniqueKey} {...block} />;
					case "blocks.info-block":
						return <InfoBlock key={uniqueKey} {...block} index={index} />;
					case "blocks.featured-articles":
						return <FeaturedArticle key={uniqueKey} {...block} />;
					case "blocks.subscribe":
						return <Subscribe key={uniqueKey} {...block} />;
					default:
						console.warn("⚠️ Unknown block type:", block.__component);
						return null;
				}
			})}
		</>
	);
}

// export function BlockRenderer({ blocks }: { blocks: Block[] }) {
// 	if (!blocks?.length) return null;

// 	return (
// 		<>
// 			{blocks.map((block, index) => {
// 				switch (block.__component) {
// 					case "blocks.hero-section":
// 						return <HeroSection key={block.id} {...block} />;
// 					case "blocks.info-block":
// 						return <InfoBlock key={block.id} {...block} index={index} />;
// 					case "blocks.featured-articles":
// 						return <FeaturedArticle key={block.id} {...block} />;
// 					case "blocks.subscribe":
// 						return <Subscribe key={block.id} {...block} />;
// 					default:
// 						console.warn("⚠️ Unknown block type:", block.__component);
// 						return null;
// 				}
// 			})}
// 		</>
// 	);
// }

