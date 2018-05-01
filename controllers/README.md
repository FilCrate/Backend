# API Routes

It's recommended to use Postman when trying out the APIs

------

## Products

#### `GET /products/`
Get all products

#### `GET /products/:id`
Get specific product by id

##### Example Response with id = 1
```json
{
    "id": 1,
    "name": "Century Light Tuna Hot  Spicy 180g ",
    "image": "https://www.filstop.com/images/T/CENTURYLIGHTTUNAHS_tn.JPG",
    "price": "1.99",
    "rating": "0",
    "stock": 2269,
    "category": "Bottled/Canned",
    "weight": "0.70",
    "sku": "0748485100098",
    "createdAt": "2018-05-01T22:40:25.191Z",
    "updatedAt": "2018-05-01T22:40:25.191Z"
}
```

#### `GET /products/category/:category`
Get all products within a category

#### `GET /products/search/:query`
Search products with usage of a query

##### Example Request
```bash
curl http://localhost:8000/products/search/q?title=Elephant&category=Rice
```

#### `POST /products/`
Add a new product entry

##### Example Request
```bash
curl -X POST -d @body.json http://localhost:8000/products/
```

body.json:

```json
{
    "name": "Jack Jill Piattos Cheese Party Pack 7.48oz",
    "image": "https://www.filstop.com/images/P/cache/JJPIATTOSPARTYPACK-228x320.jpg",
    "price": "2.00",
    "stock": 297,
    "category": "Snacks",
    "weight": "0.70",
    "sku": "4800016113239",
}
```

#### `PUT /products/:id`
Edit a product entry

##### Example Request
```bash
curl -X PUT -d @body.json http://localhost:8000/products/
```

body.json:

```json
{
    "name": "Jack Jill Piattos Cheese Party Pack 7.48oz",
    "image": "https://www.filstop.com/images/P/cache/JJPIATTOSPARTYPACK-228x320.jpg",
    "price": "2.00",
    "stock": 297,
    "category": "Snacks",
    "weight": "0.70",
    "sku": "4800016113239",
}
```

#### `DELETE /products/:id`
Delete a product entry

------

## Users

#### `GET /users/`
Get all users

#### `GET /users/:username`
Get a user by username

##### Example Response with id = 1
```json
{
    "id": 1,
    "username": "John Doe",
    "password": "password",
    "email": "johndoe@email.com",
    "role": "a",
    "createdAt": "2018-05-01T22:40:25.182Z",
    "updatedAt": "2018-05-01T22:40:25.182Z"
}
```

#### `POST /users/`
Create a new user. Checks if username or email already exists.

##### Example Request
```bash
curl -X PUT -d @body.json http://localhost:8000/users/
```

body.json:

```json
{
    "username": "Steve Jobs",
    "email": "steve@apple.com",
    "password": "password"
}
```

#### `PUT /users/:username`
Edit an existing user. Checks if username or email already exists.

#### `DELETE /users/:username`
Delete a user.

------

## Reviews

#### `GET /reviews/`
Get all reviews

#### `GET /reviews/:product_id`
Get all reviews by product_id

#### `POST /reviews/:product_id`
Create a new review for a products

#### `PUT /reviews/:id`
Edit a review

#### `DELETE /reviews/:id`
Delete a review