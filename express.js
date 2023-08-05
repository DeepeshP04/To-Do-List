import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";
import path from "node:path"

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, "static","style","css")));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/static/index.html");
})

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`)
})