// Create a small Express server:
// It should use the routes defined in full_server/routes/index.js
// It should use the port 1245

import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
