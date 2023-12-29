
## node.js API


## This node.js api will be hitting an external api upon user request and run some keyword searching on the response array texts based on user query.

External API: https://jsonplaceholder.typicode.com/posts </br>
User requested url : localhost:3000/search?keyword=mango

### If this keyword matches any of the blog posts by their <b>title/body</b> then insert these objects in a table/collection as a match record and return the search result to the user finally as API response.

## Requirements

* Node
* Express
* Mongodb
* yarn
* git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Rifat-Hosen/REST_api.git
cd REST_api
```

```bash
yarn install
```

## Steps for API access

1. create a config.env file with
    * PORT={port number}
    * NODE_ENV={ development }
    * DATABASE_URL={mongodb database access point}
2. Run express server and connect to database

    ```bash
    yarn dev
    ```
    ### if server is running and database is connected sucessfully then there will be a console log
        App listening on port {port number}
        connected to database
3. request and run some keyword searching by url formate

    ```bash
    localhost:{port number}/search?keyword={keyword}
    localhost:3000/search?keyword=iusto
    ```

    if keyword match any title/body in external API objects are then inserted into a table/collection as a match record, and the search result is finally returned to the user as an API response.

    

    ```bash
    localhost:3000/search?keyword=exercitationem repellat
    ```

    ## Response

    ```bash
    {
    "message": "success",
    "data": [
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
    }
    ```


## NOTE [ some aditional middleware can be added]
    * Helmet  {secure the application against common vulnerabilities}
    * Cors  {mitigate potential security risks associated with cross-origin requests}
    * Mongo-Sanitize  {susceptible to NoSQL injection attacks}
    * express-rate-limit  {prevent abuse and protect against certain types of DOS attacks}
    * Express-Validator  {validate and sanitize incoming request data}
    
