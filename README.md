# Clube do Ursolão

A REST API package for "Clube do Ursolão" Project.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Clone this repository to your local machine:

```
git clone https://github.com/andreamll/ursolao-node-api
```

### Installing

Access the directory of the project:

```
cd ursolao-node-api
```

Install all the dependencies on your local machine:

```
npm install
```

Start the project:

```
npm run start
```

### Running the tests

A web page should open in your default browser. If not, just go to: http://localhost:3000/


## Endpoints

- API's Status (GET)
```
http://localhost:3000
```
- Clients
  * Register (GET)
  ```
  http://localhost:3000/register
  
  Parameters:
  - Header:
   * Content-Type = application/json
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 500
   * "token"
  ```
  * Authentication (POST)
  ```
  http://localhost:3000/auth
  ```
  * Search by ID (GET)
  ```
  https://localhost:3000/clients/:id
  ```
  * Update by ID (POST)
  ```
  https://localhost:3000/clients
  ```
  * Insert (PUT)
  ```
  https://localhost:3000/clients
  ```
- Categories of Items
  * Search all (GET)
  ```
  http://localhost:3000/categories
  ```
  * Search by ID (GET)
  ```
  http://localhost:3000/categories/:id
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/categories/:id
  ```
  * Update by ID (POST)
  ```
  http://localhost:3000/categories
  ```
  * Insert (PUT)
  ```
  http://localhost:3000/categories
  ```
- Items
  * Search by ID (GET)
  ```
  http://localhost:3000/items/:id
  ```
  * Search by Category (GET)
  ```
  http://localhost:3000/items/category/:categoryDescription
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/items/:id
  ```
  * Update by ID (POST)
  ```
  http://localhost:3000/items
  ```
  * Insert (PUT)
  ```
  http://localhost:3000/items
  ```
- Lendings
  * Search by ID (GET)
  ```
  http://localhost:3000/lendings/:id
  ```
  * Search by Client (GET)
  ```
  http://localhost:3000/lendings/clients/:id
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/lendings/:id
  ```
  * Update by ID (UPDATE)
  ```
  http://localhost:3000/lendings
  ```
  * Insert (INSERT)
  ```
  http://localhost:3000/lendings/
  ```
- Lending Items
  * Search by ID (GET)
  ```
  http://localhost:3000/lendings/items/:id
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/lendings/items/
  ```
  * Insert (PUT)
  ```
  http://localhost:3000/lendings/items/
  ```

## Version

1.0.0


## Authors

* **Andrea Floriano** - [andreamll](https://github.com/andreamll)
* **Arthur Sales** - [arthurproducer](https://github.com/arthurproducer)

