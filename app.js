const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./src/routers/main.routes");
const productRoutes = require("./src/routers/products.routes");
const factureController = require("./src/routers/facture.routes");
const userController = require("./src/routers/users.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

const publicPath = path.resolve("public");
app.use(express.static(publicPath));

// Invocación de rutas
app.use("/", mainRoutes, productRoutes, factureController, userController);

app.listen(process.env.PORT || 3030, () => {
  console.log(`Servidor corriendo en el puerto 3030`);
});
