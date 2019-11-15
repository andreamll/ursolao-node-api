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
  ```
  * Authentication (POST)
  ```
  http://localhost:3000/auth
  
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
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Search by ID (GET)
  ```
  https://localhost:3000/clients/:id
  
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Update by ID (POST)
  ```
  https://localhost:3000/clients
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Insert (PUT)
  ```
  https://localhost:3000/clients
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
- Categories of Items
  * Search all (GET)
  ```
  http://localhost:3000/categories
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Search by ID (GET)
  ```
  http://localhost:3000/categories/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/categories/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Update by ID (POST)
  ```
  http://localhost:3000/categories
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Insert (PUT)
  ```
  http://localhost:3000/categories
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
- Items
  * Search by ID (GET)
  ```
  http://localhost:3000/items/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Search by Category (GET)
  ```
  http://localhost:3000/items/category/:categoryDescription
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/items/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Update by ID (POST)
  ```
  http://localhost:3000/items
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Insert (PUT)
  ```
  http://localhost:3000/items
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
- Lendings
  * Search by ID (GET)
  ```
  http://localhost:3000/lendings/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Search by Client (GET)
  ```
  http://localhost:3000/lendings/clients/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/lendings/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Update by ID (UPDATE)
  ```
  http://localhost:3000/lendings
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Insert (INSERT)
  ```
  http://localhost:3000/lendings/
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
- Lending Items
  * Search by ID (GET)
  ```
  http://localhost:3000/lendings/items/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/lendings/items/
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```
  * Insert (PUT)
  ```
  http://localhost:3000/lendings/items/
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "token"
  ```

## Version

1.0.0


## Authors

* **Andrea Floriano** - [andreamll](https://github.com/andreamll)
* **Arthur Sales** - [arthurproducer](https://github.com/arthurproducer)

