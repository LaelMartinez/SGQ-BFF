import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
const cors = initMiddleware(Cors());

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await cors(req, res);

  const form = new IncomingForm();
  form.uploadDir = 'U:\\dados\\sgq\\uploads';

  try {
    await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error(err);
          reject({ error: 'Erro ao processar o arquivo.' });
          return;
        }
        console.log(files);

        const uploadedFile = files.file[0];

        // Verificar se a propriedade `filepath` está presente
        if (!uploadedFile || !uploadedFile.filepath) {
          reject({ error: 'Caminho do arquivo temporário não encontrado.' });
          return;
        }

        // Novo caminho com o nome original do arquivo
        const newFilePath = path.join(form.uploadDir, uploadedFile.originalFilename);

        try {
          // Renomear o arquivo
          fs.renameSync(uploadedFile.filepath, newFilePath);

          console.log(`Arquivo renomeado para: ${uploadedFile.originalFilename}`);
          resolve({ message: 'Arquivo(s) enviado(s) com sucesso!' });
        } catch (renameError) {
          console.error(renameError);
          reject({ error: 'Erro ao renomear o arquivo.' });
        }
      });
    });

    res.status(200).json({ message: 'Arquivo(s) enviado(s) com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}
