"use client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Block } from "@/types";
import { formatDate } from "@/utils/format-date";
import { StrapiImage } from "./StrapiImage";
import { SubmitButton } from "./SubmitButton";

const INITIAL_STATE = {
   zodErrors: null,
   strapiErrors: null,
   errorMessage: null,
   successMessage: null,
   formData: null,
};

interface TextInputProps {
   id: string;
   label: string;
   name: string;
   type?: string;
   error?: string;
   defaultValue?: string;
}

function TextInput({
   id,
   label,
   name,
   type = "text",
   error,
   defaultValue,
}: TextInputProps) {
   return (

      <div className="mb-6">
         {/* Replicating .copy styles (label text) */}
         <label htmlFor={id} className="text-gray-700 block mb-2">
            {label}
         </label>
         <input
            type={type}
            name={name}
            id={id}
            // Replicating .input, .input__text, and .input--beige
            // This gives it full width, padding, rounded corners, and the beige background
            className="w-full p-3 rounded-lg bg-[#f1e8d9] focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150"
            defaultValue={defaultValue}
         />
         {/* Replicating .input__error styles */}
         {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
   );
}

export function EventSignupForm({
   blocks,
   eventId,
   startDate,
   price,
   image,
}: {
   blocks: Block[];
   eventId: string;
   startDate?: string;
   price?: string;
   image?: {
      url: string;
      alt: string;
   };
}) {
   // Note: useReducer is needed if INITIAL_STATE is used. Added import above.
   // const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

   return (

      // The light beige background is applied here for the entire form area.
      <section className="w-full flex p-6 md:p-10 bg-stone-50 rounded-xl">
         <div className="signup-form__info mb-4 md:mb-8 w-full">
            <BlockRenderer blocks={blocks} />
            {startDate && (
               <p className="signup-form__date text-gray-600 mb-2">
                  <span className="font-bold">StartDate:</span> {formatDate(startDate)}
               </p>
            )}
            {price && (
               <p className="signup-form__price text-gray-600 mb-4">
                  <span className="font-bold">Price:</span> {price}
               </p>
            )}
         </div>

         <form className="signup-form__form w-[49%]">
            {image && (
               <StrapiImage
                  src={image.url}
                  alt={image.alt}
                  height={200}
                  width={200}
                  className="signup-form__image mb-6 mx-auto"
               />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <TextInput id="firstName" label="First Name" name="firstName" />
               <TextInput id="lastName" label="Last Name" name="lastName" />
            </div>

            {/* Standard full-width fields */}
            <TextInput id="email" label="Your e-mail address" name="email" type="email" />
            <TextInput id="phone" label="Your telephone number" name="telephone" type="text" />

            {/* Hidden field */}
            <input hidden type="text" name="eventId" defaultValue={eventId} />

            <div className="mt-8">
               <SubmitButton
                  text="Stay in touch!" // Changed text to match image
                  className="w-full text-center text-white font-bold py-4 px-6 rounded-lg bg-teal-500 hover:bg-teal-600 transition duration-200 shadow-md"
               />
            </div>
         </form>
      </section>
   );
}
