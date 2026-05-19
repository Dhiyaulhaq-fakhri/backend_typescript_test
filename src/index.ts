import  express  from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// jalankan server
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});