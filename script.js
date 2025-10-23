const sheetName = 'Sheet1';  // Change if your sheet is named differently

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const data = e.parameter;

  // Check if this is query form submission (key QueryText present)
  if (data.QueryText !== undefined) {
    // Append new row for queries
    sheet.appendRow([
      new Date(),
      data.QueryText || '',
      data.EmailOrPhone || ''
    ]);
  } else {
    // Append new row for contact-us form
    sheet.appendRow([
      new Date(),
      data.FirstName || '',
      data.LastName || '',
      data.Birthday || '',
      data.Gmail || ''
    ]);
  }

  // Return success response
  return ContentService.createTextOutput('Success');
}
