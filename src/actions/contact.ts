'use server';

import ContactFormEmail from "@/components/ContactFormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 50) || !validateString(message, 500)) {
    return { error: "Invalid input" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "patrick.nguyen01@outlook.com",
      subject: "New message from your Portfolio",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};