// Create a small Express server:
// It should use the routes defined in full_server/routes/index.js
// It should use the port 1245

import express from 'express';
import router from './routes/index';
const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
module.exports = app;
