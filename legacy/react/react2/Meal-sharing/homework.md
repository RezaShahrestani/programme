# Meal sharing project recap

This page provides you with:

1. A summary of the homework from the NodeJS and React modules that **relate** to the meal-sharing project
2. Some additional steps to complete **after** the meal sharing session

## NodeJS

### Week 1: Feature routes

- `/future-meals`
- `/past-meals`
- `/all-meals`
- `/first-meal`
- `/last-meal`

[Full description](https://github.com/HackYourFuture-CPH/node.js/blob/main/week1/homework/README.md#meal-sharing-endpoints)

### Week 2: CRUD routes for meals and reservations

`/meals`:

- GET `/api/meals`
- POST `/api/meals`
- GET `/api/meals/:id`
- PUT `/api/meals/:id`
- DELETE `/api/meals/:id`

`/reservations`:

- GET `/api/reservations`
- POST `/api/reservations`
- GET `/api/reservations/:id`
- PUT `/api/reservations/:id`
- DELETE `/api/reservations/:id`

[Full description](https://github.com/HackYourFuture-CPH/node.js/blob/main/week2/homework/README.md#meal-sharing-endpoints)

### Week 3: Meal filtering and CRUD routes for reviews

`GET /api/meals` query parameters:

- `maxPrice`
- `availableReservations`
- `title`
- `dateAfter`
- `dateBefore`
- `limit`
- `sortKey`
- `sortDir`

> Make sure that the query parameters can be **combined**, e.g. `?limit=4&maxPrice=90`.

`/reviews`:

- GET `/api/reviews`
- GET `/api/meals/:meal_id/reviews`
- POST `/api/reviews`
- GET `/api/reviews/:id`
- PUT `/api/reviews/:id`
- DELETE `/api/reviews/:id`

[Full description](https://github.com/HackYourFuture-CPH/node.js/blob/main/week3/homework/README.md#meal-sharing-endpoints)

## React 1

### Week 3: `<MealsList>` component

- Add a new component named `<MealsList>` which fetches some meals from the API and shows them in a simple list

[Full description](https://github.com/HackYourFuture-CPH/React/blob/main/react1/week3/homework.md#meal-sharing)

## React 2

### Week 1: `<Meal>` component and grid layout

- Add a new component named `<Meal>` which renders the information for a meal in a nice card design
- Change the `<MealsList>` to place the `<Meal>` cards in a grid

[Full description](https://github.com/HackYourFuture-CPH/React/blob/main/react2/week1/homework.md#meal-sharing)

### Week 2: Frontend routing and form submissions

Routes:

- `/` (home page)
- `/meals/{id}` (meal detail page)
- `/meals` (all meals page)

Meal detail page forms:

- form for reservation (`POST /api/reservations`)
- form for review (`POST /api/reviews`)

[Full description](https://github.com/HackYourFuture-CPH/React/blob/main/react2/week2/homework.md#meal-sharing-app-continued)

## Meal sharing session

These tasks should be completed after all of the **above** homework. These tasks will require you to make changes to both the web app and the API!

Searching for meals:

- Add a search control (e.g. a text field with a "Search" button) to the page that shows all meals (`/meals`)
- When a user fills in a text and clicks search, the list of meals shown should be limited to those that partially match the search string
  > Hint: Your API should already accept a query parameter called `title` to perform this kind of filtering!

Sorting meals:

- Add a sort control (e.g. two drop downs, one for which field to sort on and one for which direction to sort in) to the page that shows all meals (`/meals`)
- When a user changes which field to sort on **or** when they change the sorting direction, the list of meals shown should change its sort order
  > Hint: Your API should already accept two query parameters called `sortKey` and `sortDir`!

Showing available spots:

- Add an indicator to the `Meal` component for how many spots are left to be reserved for a given meal
  > Hint: You can extend the `GET /meals` and `GET meals/:id` endpoints to include this information! Another alternative is to create a new endpoint just for this information and call it as an additional effect inside of the `<Meal`> component.

> Bonus: How can you update this information every 5 seconds?

Once those 3 tasks are done and you have time over, feel free to polish your application, you can find lots of examples [here](./design-inspo.md).
