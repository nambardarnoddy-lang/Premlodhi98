function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Document Upload')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function uploadDocument(fileName, base64Data, mimeType) {
  const folder = getUploadFolder();
  const blob = Utilities.newBlob(
    Utilities.base64Decode(base64Data),
    mimeType || 'application/octet-stream',
    fileName
  );

  const file = folder.createFile(blob);

  return {
    id: file.getId(),
    name: file.getName(),
    url: file.getUrl(),
    size: file.getSize()
  };
}

function getUploadFolder() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const folderId = scriptProperties.getProperty('UPLOAD_FOLDER_ID');

  if (folderId) {
    try {
      return DriveApp.getFolderById(folderId);
    } catch (error) {
      console.warn('UPLOAD_FOLDER_ID is invalid; falling back to root folder.');
    }
  }

  return DriveApp.getRootFolder();
}
