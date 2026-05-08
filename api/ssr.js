import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // Change this path if your server entry file has a different name
    const serverEntry = path.join(process.cwd(), 'dist/server/entry-server.js');
    
    const { render } = await import(serverEntry);
    
    const url = req.url || '/';
    const html = await render(url);

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}