// pages/api/documents/[...ids].js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { ids } = req.query;

  // Certifique-se de ids é uma string única
  const singleStringId = Array.isArray(ids) ? ids.join('/') : ids;

  // Obtenha a extensão do arquivo da string única
  const fileExtension = path.extname(singleStringId).toLowerCase();

  // Construa o caminho completo
  const completePath = path.join('u://dados//sgq/', singleStringId);

  try {
    const fileContent = fs.readFileSync(completePath);

    // Configurar o Content-Type com base na extensão do arquivo
    switch (fileExtension) {
      case '.pdf':
        res.setHeader('Content-Type', 'application/pdf');
        break;
      case '.doc':
        res.setHeader('Content-Type', 'application/msword');
        break;
      case '.xls':
        res.setHeader('Content-Type', 'application/vnd.ms-excel');
        break;
      case '.jpg':
      case '.jpeg':
        res.setHeader('Content-Type', 'image/jpeg');
        break;
      default:
        // Se a extensão não for reconhecida, definir Content-Type como application/octet-stream
        res.setHeader('Content-Type', 'application/octet-stream');
    }

    res.status(200).send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
