"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

type State = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data. Please check your entries.",
      success: false,
    };
  }

  try {
    // In a real application, you would handle the form data here:
    // - Send an email (e.g., using Resend, Nodemailer)
    // - Save to a database (e.g., Firestore, Supabase, etc.)
    console.log("Received contact form submission:", validatedFields.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
