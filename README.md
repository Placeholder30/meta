# metacare APIs

API manipulating starwars API

## Instructions to run the app locally

clone the repo

- run `yarn install` to install all dependencies
- run `yarn dev` to start your server on port 3000

## API Reference

#### Get all movies

```http
  GET /api/v1/movies
```

#### Get all comments

```http
  GET /api/v1/comments
```

#### Post a comment

```http
  POST /api/v1/comments
```

| Request data | Type     | Description                                                      |
| :----------- | :------- | :--------------------------------------------------------------- |
| `comment`    | `string` | **Required**. The comment you want to add to a movie             |
| `episode_id` | `string` | **Required**. The starwars episode to associate the comment with |

#### Get Characters

```http
  GET /api/v1/characters
```

| Parameter | Type     | Description                                                                                                                              |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `sort_by` | `string` | **Optional**. You can specify how to sort the characters, you can sort by one of **name**, **height** and **gender**. eg: `sort_by=name` |
| `dsc`     | `string` | **Optional**. items are returned by default in ascending order, pass `dsc=true `to return them in descending order                       |
| `filter`  | `string` | **Optional**. You can specify to filter the characters by gender, eg: `filter=male`                                                      |
