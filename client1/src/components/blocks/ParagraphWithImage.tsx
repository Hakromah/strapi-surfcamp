import ReactMarkdown from "react-markdown";
import { StrapiImage } from "../StrapiImage";
import { ParagraphWithImageProps } from "@/types";

export function ParagraphWithImage({
   content,
   image,
   reversed,
   imageLandscape,
}: Readonly<ParagraphWithImageProps>) {
   // Helper for applying the reversal of the order
   const flexDirection = reversed ? "flex-row-reverse" : "flex-row";

   // Helper for image container sizing. We'll use a 50/50 split for simplicity.
   const imageContainerClasses = imageLandscape
      ? "w-full md:w-1/2" // For landscape image treatment if needed, maybe more complex sizing
      : "w-full md:w-1/2"; // Assuming a 50/50 split for the visual shown

   return (
      <div
         className={`flex max-md:flex-col w-full md:flex-row items-start max-md:px-[20px] py-4 gap-8 ${flexDirection}`}
      >
         {/* Text Content Area */}
         {/* 'w-full md:w-1/2' ensures a 50/50 split on medium screens and up */}
         <div className="md:p-6 w-full md:w-1/2 max-md:order-2">
            <div className="text-lg text-gray-700 leading-relaxed text-justify">
               <ReactMarkdown>{content}</ReactMarkdown>
            </div>
         </div>

         {/* Image Container Area */}
         <div className={`w-full md:w-1/2 md:max-w-[45%] relative max-md:order-1 max-md:aspect-video ${imageContainerClasses}`}>
            <StrapiImage
               src={image.url}
               alt={image.alternativeText || "No alternative text provided"}
               width={960} // Adjusted from 1920
               height={720} // Adjusted from 1080
               className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            {/* Image Caption Placeholder (optional, based on screenshot) */}
            <p className="text-sm text-gray-500 mt-2 italic">
               Caption for the image. Source by, taken whatever.
            </p>
         </div>
      </div>
   );
   // return (
   //    <div
   //       className={`article-text-image ${reversed ? "article-text-image--reversed" : ""
   //          } ${imageLandscape ? "" : "article-text-image--portrait"}`}
   //    >
   //       <div className="copy article-text-image__text article-paragraph">
   //          <ReactMarkdown >
   //             {content}
   //          </ReactMarkdown>
   //       </div>
   //       <div className="article-text-image__container">
   //          <StrapiImage
   //             src={image.url}
   //             alt={image.alternativeText || "No alternative text provided"}
   //             width={1920}
   //             height={1080}
   //             className="article-text-image__image"
   //          />
   //       </div>
   //    </div>
   // );
}
