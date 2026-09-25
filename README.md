# Premlodhi98

A lightweight Google Apps Script document upload app that lets users select files from the browser and store them in Google Drive.

## Features

- Upload one or more files from a web form
- Save uploaded files to Google Drive
- Display file names, sizes, and links after upload
- Optional upload folder configuration via script properties

## Files

- `Code.gs` – Apps Script backend logic
- `Index.html` – upload form and client-side logic
- `Stylesheet.html` – styling
- `appsscript.json` – Apps Script project manifest

## Deploy

1. Open the Google Apps Script project.
2. Paste the contents of these files into the project.
3. Save and deploy as a Web App.
4. Set the execution permissions and access level you need.
5. Open the generated web app URL in the browser.

## Optional configuration

If you want uploads to go into a specific Drive folder instead of the root folder, set a script property named `UPLOAD_FOLDER_ID` with the target folder ID.

Example:

- In Apps Script, go to Project Settings > Script Properties
- Add `UPLOAD_FOLDER_ID` with the folder ID you want to use

