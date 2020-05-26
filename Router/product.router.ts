import { Router } from "https://deno.land/x/oak/mod.ts";
import * as ProductCtrl from "../Controller/product.controller.ts";

const router = new Router({ prefix: "/api/v1.0/" });

// Get all products
router.get("products", ProductCtrl.getProducts)
  // Get a single product
  .get("products/:id", ProductCtrl.getProduct)
  // Add a new Product
  .post("products", ProductCtrl.newProduct)
  // Update a product
  .put("products/:id", ProductCtrl.updateProduct)
  // Delete a product
  .delete("products/:id", ProductCtrl.deleteProduct);

export default router;