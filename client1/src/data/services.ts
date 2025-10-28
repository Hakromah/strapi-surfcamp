const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

export async function subscribeService(email: string) {
   const url = new URL("/api/newsletter-signups", BASE_URL);

   try {
      const response = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            data: {
               email,
            }
         }),
      });
      return await response.json();
   } catch (error) {
      console.error("Error subscribing to newsletter:", error);
   }
}

export interface EventsSubscribeProps {
   firstName: string;
   lastName: string;
   email: string;
   telephone: string;
   event: {
      connect: [string]
   }
}
