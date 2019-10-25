import getWebViewerConstructorOptions from 'helpers/getWebViewerConstructorOptions';

/**
 * Load a document inside WebViewer UI.
 * @method WebViewer#loadDocument
 * @param {(string|File|ArrayBuffer|Blob)} source Path to the document OR <a href='https://developer.mozilla.org/en-US/docs/Web/API/File' target='_blank'>File object</a> if opening local file.
 * @param {object} options Additional options
 * @param {string} options.extension The extension of the file. If file is a blob/file object or a URL without an extension then this is necessary so that WebViewer knows what type of file to load.
 * @param {string} options.filename Filename of the document, which is used when downloading the PDF.
 * @param {object} options.customHeaders An object of custom HTTP headers to use when retrieving the document from the specified url.
 * @param {string} options.documentId Unique id of the document.
 * @param {boolean} options.withCredentials Whether or not cross-site requests should be made using credentials.
 * @param {string} options.cacheKey A key that will be used for caching the document on WebViewer Server.
 * @param {string} options.password A string that will be used to as the password to load a password protected document.
 * @example // 5.1 and after
WebViewer(...)
  .then(function(instance) {
    instance.loadDocument('https://www.pdftron.com/downloads/pl/test.pdf', {
      documentId: '1',
      filename: 'sample-1.pdf'
    });
  });
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer(...);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  instance.loadDocument('https://www.pdftron.com/downloads/pl/test.pdf', {
    documentId: '1',
    filename: 'sample-1.pdf'
  });
});
 */

import loadDocument from 'helpers/loadDocument';

export default store => (src, options = {}) => {
  const { pdftronServer } = getWebViewerConstructorOptions();
  // if WebViewer is initialized with the pdftronServer option then we want to always use WebViewer Server
  if (pdftronServer) {
    options.pdftronServer = pdftronServer;
  }

  loadDocument(src, options, store.dispatch);
};
