import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import chalk from "chalk";

const app = express();

const PORT = process.env.PORT || 8000;

// @@Desc:------MIDDLEWARES------
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: ["http://localhost:5173", "http://localhost:3000"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
      : {
          origin: ["http://localhost:5173", "http://localhost:3000"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
  )
);

//@@Desc:-----------------importing routers---------------
import authRoutes from "./src/routes/auth.js";
import productRoutes from "./src/routes/product.js";

// @@Desc:-----------------route section-----------------
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);

app.use("/", (req, res) =>
  res.send("----------WELCOME TO THRIFTY THREADS----------")
);

app.listen(PORT, () =>
  console.log(
    chalk.bgMagentaBright(`
    SERVER STARTED AND RUNNING AT PORT ${PORT}`)
  )
);
