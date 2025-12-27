import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function handleContactForm(values: ContactFormValues) {
  try {
    const parsedData = contactFormSchema.parse(values);

    // Portfolio demo behavior (client-side)
    console.log("New contact form submission:");
    console.log("Name:", parsedData.name);
    console.log("Email:", parsedData.email);
    console.log("Message:", parsedData.message);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed. Please check your input.",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}
