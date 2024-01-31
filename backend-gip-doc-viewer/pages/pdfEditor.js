// pages/api/pdfEditor.js
import { createServer } from 'http';
import { PDFDocument, rgb } from '@pdf-lib/core';

const createNewPdf = async () => {
  try {
    // Crie um novo documento PDF
    const pdfDoc = await PDFDocument.create();

    // Adicione uma página ao documento
    const page = pdfDoc.addPage();

    // Adicione algum texto à página
    const { width, height } = page.getSize();
    page.drawText('Olá, este é um novo PDF!', { x: 50, y: height - 200, color: rgb(0, 0, 0) });

    // Salve o documento como bytes
    const newPdfBytes = await pdfDoc.save();

    return newPdfBytes;
  } catch (error) {
    console.error('Erro ao criar um novo PDF:', error);
    throw error;
  }
};

const fetchExistingPdf = async () => {
  try {
    // Crie um novo PDF
    const newPdfBytes = await createNewPdf();
    return newPdfBytes;
  } catch (error) {
    console.error('Erro ao buscar um novo PDF:', error);
    throw error;
  }
};

const server = createServer(async (req, res) => {
  if (req.method === 'POST') {
    try {
      const existingPdfBytes = await fetchExistingPdf();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', existingPdfBytes.length);
      res.end(existingPdfBytes);
    } catch (error) {
      console.error('Erro ao editar o PDF:', error);
      res.statusCode = 500;
      res.end('Erro interno ao editar o PDF');
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

export default server;
