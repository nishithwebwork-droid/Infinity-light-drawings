import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const host = '0.0.0.0';

const distPath = path.resolve(__dirname, 'dist');

// Liveness check for Cloud Run health probes
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Serve static assets if dist exists
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // SPA fallback: send index.html for any unmatched route
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.status(200).send('App build is running. Please refresh shortly.');
  });
}

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
