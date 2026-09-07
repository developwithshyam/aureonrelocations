/**
 * Aureon Relocations — contact form handler
 *
 * Setup:
 * 1. Open spreadsheet "Aureon Relocations Enquiries"
 * 2. Rename the tab at the bottom to exactly: enquiries
 * 3. Row 1 headers: Timestamp | Name | Email | Phone | Enquiry Type | Message
 * 4. Extensions → Apps Script → paste this file → Save
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the NEW /exec URL deployment id into src/lib/constants.ts
 *
 * Test in browser (logged out / incognito):
 *   YOUR_EXEC_URL?Name=Test&Email=test@test.com&Phone=123&EnquiryType=Residential%20Relocation&Message=hello
 *
 * Troubleshooting:
 * - Saving code is NOT enough — use Deploy → New deployment after every code change.
 * - Use the /exec URL from the deployment dialog, not the script editor test URL.
 * - If still blocked, check Google Workspace admin allows public web publishing.
 */

var SHEET_NAME = "enquiries";

function appendEnquiry(params) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(
      "Sheet tab '" + SHEET_NAME + "' not found. Check the tab name at the bottom of the spreadsheet.",
    );
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Enquiry Type",
      "Message",
    ]);
  }

  sheet.appendRow([
    new Date(),
    params.Name || "",
    params.Email || "",
    params.Phone || "",
    params.EnquiryType || "",
    params.Message || "",
  ]);
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.Name) {
      appendEnquiry(e.parameter);
      return jsonResponse({ result: "success" });
    }

    return jsonResponse({
      result: "ok",
      message: "Aureon contact form endpoint is ready. Submissions use POST or GET with form fields.",
    });
  } catch (error) {
    return jsonResponse({ result: "error", message: String(error) });
  }
}

function doPost(e) {
  try {
    appendEnquiry(e.parameter || {});
    return jsonResponse({ result: "success" });
  } catch (error) {
    return jsonResponse({ result: "error", message: String(error) });
  }
}
