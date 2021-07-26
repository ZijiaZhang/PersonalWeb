import express from "express"
import path from "path"
import http from "http"
import fs from "fs"

const app = express();
app.use(express.static('./public'));
app.use('/room/*', (req: any, res: { sendFile: (arg0: any) => void; }) =>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


app.get('/api/images', (req:any, res: any) =>{
    let files = fs.readdirSync(path.join(__dirname, '..', 'public', 'photos_small'));
    res.json(files);
});


const server = http.createServer(app);

server.listen(process.env.PORT || 9001, () => console.log('server is running on port 9001'));