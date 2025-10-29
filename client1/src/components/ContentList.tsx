/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";

interface ContentListProps {
   headline: string;
   query?: string;
   path: string;
   featured?: boolean;
   component: React.ComponentType<ArticleProps & { basePath: string }>;
   headlineAlignment?: "center" | "right" | "left";
}

async function loader(path: string, featured?: boolean) {
   const { data, meta } = await getContent(path, featured);
   return {
      articles: (data as ArticleProps[]) || [],
   };
}

export async function ContentList({
   headline,
   path,
   featured,
   component,
   headlineAlignment,
}: Readonly<ContentListProps>) {
   const { articles } = await loader(path, featured);
   // Utility for text alignment class
   const alignClass = headlineAlignment === 'center' ? 'text-center' :
      headlineAlignment === 'right' ? 'text-right' :
         'text-left';
   const Component = component;
   return (
      <section className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
         <h3 className={`text-3xl font-bold mb-6 ${alignClass}`}>
            {headline || "Featured Articles"}
         </h3>
         {/* Tailwind Grid: The key to the layout: 1 column on small, 2 on medium, 3 on large screens */}
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
               <Component key={article.documentId} {...article} basePath={path} />
            ))}
         </div>
      </section>
   );
}
