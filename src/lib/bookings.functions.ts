import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(150).optional().or(z.literal("")),
  preferred_date: z.string().trim().max(20).optional().or(z.literal("")),
  preferred_time: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => bookingSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: inserted, error } = await supabaseAdmin
      .from("bookings")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        service: data.service || null,
        preferred_date: data.preferred_date || null,
        preferred_time: data.preferred_time || null,
        message: data.message || null,
      })
      .select("id, created_at")
      .single();

    if (error) {
      console.error("[bookings] insert failed:", error);
      throw new Error("Could not save booking. Please try again.");
    }

    // TODO: send confirmation emails to nasibrehman187@gmail.com (owner)
    // and the user once an email domain is configured for this project.
    // Scaffold: sendTemplateEmail('booking-confirmation-owner', 'nasibrehman187@gmail.com', {...})
    // Scaffold: sendTemplateEmail('booking-confirmation-user', data.email, {...})

    return { id: inserted.id, created_at: inserted.created_at };
  });
