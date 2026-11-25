import app from "./app.js";
import "dotenv/config";

app.listen( process.env.PORT, () => {
    console.log("Server is up on 3000 port")
})