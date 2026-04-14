import { NextRequest } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.push({ field: "subject", message: "Subject is required" });
  } else if (data.subject.trim().length < 3) {
    errors.push({ field: "subject", message: "Subject must be at least 3 characters" });
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: "message", message: "Message is required" });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: "message", message: "Message must be at least 10 characters" });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as ContactFormData;

    const validationErrors = validateFormData({ name, email, subject, message });

    if (validationErrors.length > 0) {
      const errorMessage = validationErrors.map((e) => e.message).join("; ");
      return Response.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }

    // Log the submission to console
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    });

    // TODO: Integrate email service here (e.g., SendGrid, Resend, Nodemailer)
    // Example:
    // await sendEmail({
    //   to: "your-email@example.com",
    //   from: "noreply@yourdomain.com",
    //   subject: `Contact Form: ${subject}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    return Response.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return Response.json(
      { success: false, message: "An error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
