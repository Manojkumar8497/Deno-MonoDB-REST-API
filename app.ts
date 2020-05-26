import { Application } from "https://deno.land/x/oak/mod.ts";
import ProductRoute from "./Router/product.router.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 3000;
const HOST = env.HOST || "localhost";

// To initialze the app
const app = new Application();

// Middleware for router and req methods
app.use(ProductRoute.routes());
app.use(ProductRoute.allowedMethods());

console.log(`Server is listening to ${PORT} PORT`);

app.listen(`${HOST}:${PORT}`);