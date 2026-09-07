import { googleSheets } from "@/lib/constants";

type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
};

/**
 * Submit to Google Apps Script from the browser without navigating away.
 * Uses no-cors because GAS redirects to a googleusercontent.com echo URL.
 */
export async function submitEnquiryToGoogleSheets(
  data: EnquiryPayload,
): Promise<void> {
  const params = new URLSearchParams({
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    EnquiryType: data.enquiryType,
    Message: data.message,
  });

  await fetch(googleSheets.webAppUrl, {
    method: "POST",
    mode: "no-cors",
    body: params,
  });
}
