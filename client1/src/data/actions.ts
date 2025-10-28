"use server";
import { z } from "zod";
import { subscribeService } from "./services";

const SubscribeSchema = z.object({
   email: z.email({
      message: "Please enter a valid email address.",
   }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function subscribeAction(prevState: any, formData: FormData) {
   console.log("Form Data Submitted using server action:");
   const email = formData.get("email");

   // Validate the email using Zod schema
   const validatedFields = SubscribeSchema.safeParse({ email: email });

   if (!validatedFields.success) {
      console.dir(validatedFields.error.flatten().fieldErrors, { depth: null });
      return {
         ...prevState,
         zodErrors: validatedFields.error.flatten().fieldErrors,
         strapiErrors: null,
      }
   }
   // If validation passes, call the subscribe service
   const responseData = await subscribeService(validatedFields.data.email);

   if (!responseData) {
      return {
         ...prevState,
         strapiErrors: null,
         zodErrors: null,
         errorMessage: "An unexpected error occurred. Please try again",
      }
   }
   if (responseData.error) {
      return {
         ...prevState,
         strapiErrors: responseData.error,
         zodErrors: null,
         errorMessage: "Failed to subscribe."
      }
   }
   return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      errorMessage: null,
      successMessage: "Successfully subscribed!"
   };

}
