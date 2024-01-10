import Cors from 'cors';

// Helper function to initialize middleware
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Exportando a função diretamente
export default initMiddleware;

// Exportando Cors se necessário
export { Cors };
