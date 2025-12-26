"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const parsedData = contactFormSchema.parse(values);
    
    // In a real application, you would send an email or save to a database here.
    // For this demo, we'll just log it to the server console.
    console.log("New contact form submission:");
    console.log("Name:", parsedData.name);
    console.log("Email:", parsedData.email);
    console.log("Message:", parsedData.message);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error processing contact form:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Validation failed. Please check your input." };
    }
    return { success: false, message: "An unexpected error occurred." };
  }
}
