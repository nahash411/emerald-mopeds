var PDFDocument = require('pdfkit');
var blobStream  = require('blob-stream');

doc = new PDFDocument();

stream = doc.pipe(blobStream());



doc.end();

stream.on('finish', function () {
  var url = stream.toBlobURL('application/pdf');
});
