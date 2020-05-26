<p align="center">
    <img src="https://github.com/Manojkumar8497/Deno-MonoDB-REST-API/blob/master/Image/Mongo_Deno.png" alt="Logo" width=550 height=200>

  <h1 align="center">Deno MongoDB REST API</h1>
  <p align="center">REST API CRUD operation using Deno, Oak and MongoDB.</p>
</p>

## Installation

1. Clone the repository
2. Start the server by running `deno run --allow-net --allow-write --allow-read --allow-plugin --unstable server.ts`

Note: Deno is secure by default. No file, network, or environment access, unless explicitly enabled. So when you run the server, its important to add --allow-net --allow-write --allow-read --allow-plugin --unstable.

## Usage

You can access the following endpoints on [http://localhost:3000/api/v1.0/](http://localhost:3000/api/v1.0/)

| METHOD | URL           | Description            |
|--------|---------------|------------------------|
| GET    | /products     | Return all Products    |
| GET    | /products/:id | Return single Products |
| POST   | /products     | Create a Product       |
| PUT    | /products/:id | Update Product         |
| DELETE | /products/:id | Delete Product         |

## More Updates
Follow me on [LinkedIn](https://www.linkedin.com/in/manoj-m8497/) to get the latest update about features, code, and more. If you like this project give a star to this repo.

## Thanks

Thanks to all contributors and their support.

If you have an idea or you want to do something, tell me or just do it!
I'm always happy to hear your feedback!

## Copyright and license

Code and documentation copyright 2020 the authors. Code released under the [MIT License](https://github.com/Manojkumar8497/Deno-MonoDB-REST-API/blob/master/LICENSE).
