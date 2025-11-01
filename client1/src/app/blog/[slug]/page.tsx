import type { ArticleProps } from "@/types";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/format-date";
import { getContentBySlug } from "@/data/loaders";

import { HeroSection } from "@/components/blocks/HeroSection";
import { BlockRenderer } from "@/components/BlockRenderer";

interface PageProps {
   params: Promise<{ slug: string }>;
}

async function loader(slug: string) {
   const { data } = await getContentBySlug(slug, "/api/articles");
   const article = data[0]; // Assuming the article is the first item in the returned data array
   if (!article) throw notFound();
   return { article: article as ArticleProps, blocks: article?.blocks };
}

interface ArticleOverviewProps {
   headline: string;
   description: string;
}

function ArticleOverview({
   headline,
   description,
}: Readonly<ArticleOverviewProps>) {
   return (
      <div className="mx-4 flex w-[50%] mt-[1rem] mb-[6rem]">
         <div className="w-[60%]">
            <h3 className="mb-[2rem] text-[#333]">{headline}</h3>
            <p className="text-[#666] font-[2.4rem] leading-[1.5rem]">{description}</p>
         </div>
      </div>
   );
}
export default async function SingleBlogRoute({ params }: PageProps) {
   const slug = (await params).slug;
   const { article, blocks } = await loader(slug);
   const { title, author, publishedAt, description, image } = article;

   console.dir(blocks, { depth: null });

   return (
      <div>
         <HeroSection
            id={article.id}
            heading={title}
            theme="orange"
            image={image}
            author={author}
            publishedAt={formatDate(publishedAt)}
            darken={true}
         />
         <div>
            <ArticleOverview headline={title} description={description} />
            <BlockRenderer blocks={blocks} />
         </div>
      </div>

   );
}
