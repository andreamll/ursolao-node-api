# Clube do Ursolão

A REST API package for "Clube do Ursolão" Project.

###### Node JS; MySQL; AWS; Heroku


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Check if you can access the database. In case of disaster, don't panic, you can test accessing: https://ursolao-api.herokuapp.com
```
telnet ursolao.cbuk8awyqduu.us-east-1.rds.amazonaws.com 3306
```
If everything is ok, let's clone this repository to your local machine:

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

### Running

A web page should open in your default browser. If not, just go to: http://localhost:3000/ to see if the API is alive.

All the endpoints are listed below. You can test them using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).


## Endpoints
... where the magic happens...

- API's Status (GET)
```
http://localhost:3000
```
- Clients
  * Register (POST)
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
   * email
   * password
   
  - Output:
   * HTTP Status Code: 200 / 401 / 500
   * "token"
  ```
  * Search by ID (GET)
  ```
  https://localhost:3000/clients/:id
  
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "name"
   * "email"
   * "password"
   * "countrycode"
   * "areacode"
   * "telephone"
   * "zipcode"
   * "reputation"
   * "lastlogin"
  ```
  * Update by ID (PUT)
  ```
  https://localhost:3000/clients
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * id
   * name
   * email
   * password
   * countrycode
   * areacode
   * telephone
   * zipcode
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Insert (POST)
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
   * HTTP Status Code: 200 / 500
  ```
- Categories of Items
  * Search all (GET)
  ```
  http://localhost:3000/categories
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "descr"
   * "status"
  ```
  * Search by ID (GET)
  ```
  http://localhost:3000/categories/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "descr"
   * "status"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/categories/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Update by ID (PUT)
  ```
  http://localhost:3000/categories
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * id
   * descr
   * status
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Insert (POST)
  ```
  http://localhost:3000/categories
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * descr
   * status
   
  - Output:
   * HTTP Status Code: 200 / 500
  ```
- Items
  * Search by ID (GET)
  ```
  http://localhost:3000/items/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "title"
   * "descr"
   * "photo"
   * "category"
   * "category_descr"
   * "status"
  ```
  * Search by Category (GET)
  ```
  http://localhost:3000/items/category/:category
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "title"
   * "descr"
   * "photo"
   * "category"
   * "category_descr"
   * "status"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/items/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Update by ID (PUT)
  ```
  http://localhost:3000/items
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * "id"
   * "title"
   * "descr"
   * "photo"
   * "category"
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Insert (POST)
  ```
  http://localhost:3000/items
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * "title"
   * "descr"
   * "photo"
   * "category"
   
  - Output:
   * HTTP Status Code: 200 / 500
  ```
- Lendings
  * Search by ID (GET)
  ```
  http://localhost:3000/lendings/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "cliowner"
   * "nameowner"
   * "clirequester"
   * "namerequester"
   * "startdate"
   * "enddate"
   * "grntmrg"
   * "status"
  ```
  * Search by Client (GET)
  ```
  http://localhost:3000/lendings/clients/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "cliowner"
   * "nameowner"
   * "clirequester"
   * "namerequester"
   * "startdate"
   * "enddate"
   * "grntmrg"
   * "status"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/lendings/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Update by ID (PUT)
  ```
  http://localhost:3000/lendings
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * id
   * cliowner
   * clirequester
   * startdate
   * enddate
   * grntmrg
   * status
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Insert (POST)
  ```
  http://localhost:3000/lendings/
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * cliowner
   * clirequester
   * startdate
   * enddate
   * grntmrg
   * status
   
  - Output:
   * HTTP Status Code: 200 / 500
  ```
- Lending Items
  * Search by ID (GET)
  ```
  http://localhost:3000/lendings/items/:id
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
   * "code"
   * "item"
   * "title"
   * "descr"
   * "photo"
   * "category"
   * "category_descr"
  ```
  * Delete by ID (DELETE)
  ```
  http://localhost:3000/lendings/items/
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * id
   * item
   
  - Output:
   * HTTP Status Code: 200 / 404 / 500
  ```
  * Insert (POST)
  ```
  http://localhost:3000/lendings/items/
    
  Parameters:
  - Header:
   * Content-Type = application/json
   * x-access-token = [token]
   
  - Body:
   * id
   * item
   * status
   
  - Output:
   * HTTP Status Code: 200 / 500
  ```

## Version

1.0.0


## Authors

* **Andrea Floriano** - [andreamll](https://github.com/andreamll)
* **Arthur Sales** - [arthurproducer](https://github.com/arthurproducer)

