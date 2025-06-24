import api from './index.js';

export const apiServerPlugin = () => ({
  name: 'api-server-plugin',
  configureServer(server) {
    server.middlewares.use(api);
    console.log('🚀 API server middleware configured and running.');
  },
});