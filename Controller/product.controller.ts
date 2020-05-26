import ProductModel from "../Model/product.model.ts";

// Initialize the ProductModel Class
const productClass = new ProductModel();

/**
 * @path Get All Products 
 * @desc GET /api/v1.0/products
 */
const getProducts = async ({ response }: { response: any }) => {
  // Call the getProducts Methos
  const products = await productClass.getProducts();

  response.body = {
    success: true,
    data: products,
  };
};

/**
 * @path Get single Product
 * @desc GET /api/v1.0/products/:id
 */
const getProduct = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product = await productClass.getProduct(params.id);

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Product not found",
    };
  }
};

/**
 * @path Add Product 
 * @desc POST /api/v1.0/products
 */
const newProduct = async (
  { request, response }: { request: any; response: any },
) => {
  // If the request doesn't have the body
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "Something went wrong, Please try again",
    };
  } else {
    // Get the product data from req body
    const body = await request.body();
    const productData = body.value;

    // Call the create product method
    productClass.createProduct(productData);

    response.status = 201;
    response.body = {
      success: true,
      message: "Product created",
    };
  }
};

/**
 * @path Update Product 
 * @desc PATCH /api/v1.0/products
 */
const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  // To check the product is in the products Array

  const body = await request.body();

  const updatedProduct = body.value;

  const products = await productClass.updateProduct(params.id, updatedProduct);

  response.status = 200;
  response.body = {
    success: true,
    data: products,
  };
};

/**
 * @path Delete Product 
 * @desc DELETE /api/v1.0/products/:id
 */
const deleteProduct = async (
  { params, response }: { params: { id: any }; response: any },
) => {

  await productClass.deleteProduct(params.id);

  response.status = 200;
  response.body = {
    success: true,
    message: "Product deleted",
  };

};

export {
  getProducts,
  getProduct,
  newProduct,
  updateProduct,
  deleteProduct,
};
