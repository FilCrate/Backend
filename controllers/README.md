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
Note: Getting a product review uses `:product_id` while setting/deleting a review uses `:id` of a specific entry.

#### `GET /reviews/`
Get all reviews (for testing purposes)

#### `GET /reviews/:product_id`
Get all reviews by product_id

##### Example Response with product_id = 1
```json
[
    {
        "id": 1,
        "product_id": 1,
        "user_id": 1,
        "comment": "Yummy!",
        "rating": "4",
        "createdAt": "2018-05-02T22:49:21.857Z",
        "updatedAt": "2018-05-02T22:49:21.857Z"
    },
    {
        "id": 2,
        "product_id": 1,
        "user_id": 1,
        "comment": "It's okay",
        "rating": "4",
        "createdAt": "2018-05-03T22:50:58.831Z",
        "updatedAt": "2018-05-03T22:50:58.831Z"
    }
]
```

#### `POST /reviews/:product_id`
Create a new review for a product.

##### Example Request with product_id = 1

body.json:

```json
{
    "username": "johndoe",
    "comment": "Very delicious!",
    "rating": 4.0
}
```

Note: 

* Take current `username` from current user who is typing the review.
* `product_id` is `req.params.product_id`

#### `PUT /reviews/:id`
Edit a review. Use `:id` of the entry. Users can only change the `comment` and `rating`.

##### Example Request changing id = 2

```bash
curl -X PUT -d @body.json http://localhost:8000/reviews/2
```

body.json:

```json
{
	"comment": "I don't like it", 
	"rating": 2.0
}
```

#### `DELETE /reviews/:id`
Delete a review using `:id`.

------

## Carts

#### `GET /carts/`
Get all carts (for testing purposes)

#### `GET /carts/:username`
Get all reviews by username

##### Example Response with username = 'johndoe'
```json
[
    {
        "id": 1,
        "username": "johndoe",
        "product_id": 5,
        "quantity": 2,
        "createdAt": "2018-05-13T20:43:21.325Z",
        "updatedAt": "2018-05-13T20:43:21.325Z"
    }
]
```

#### `POST /carts/`
Create a new cart entry for a product. If the product is already in the cart, update the quantity instead.

##### Example Request

body.json:

```json
{
	"username": "johndoe",
	"product_id": 5,
	"quantity": 2
}
```

#### `DELETE /carts/:id`
Delete a specific entry in the cart using `:id` of that entry.