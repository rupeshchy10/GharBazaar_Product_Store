import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet()); //Helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")); //log the requests

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
