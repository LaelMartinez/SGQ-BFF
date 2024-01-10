import fs from 'fs';
import path from 'path';
import neatCsv from 'neat-csv';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

const cors = initMiddleware(Cors());

export default async function handler(req, res) {
  await cors(req, res);
  const { caminho } = req.query;

  if (!caminho) {
    return res.status(400).json({ error: 'O parâmetro "caminho" é obrigatório.' });
  }

  const filePath = path.join(caminho);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsedCsv = await neatCsv(fileContent, { headers: false });

    // Verifique se o CSV tem pelo menos duas linhas
    if (parsedCsv.length < 2) {
      throw new Error('O CSV deve ter pelo menos duas linhas.');
    }

    const primeiraLinha = parsedCsv[0];
    const segundaLinha = parsedCsv[1];

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.status(200).json({ primeiraLinha, segundaLinha });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar o CSV.' });
  }
}
