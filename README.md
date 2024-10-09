# Limble Search Demo Frontend

This is a demo application intended to fulfill all requirements listed in `INSTRUCTIONS.md`. For speed I opted to use Bun instead of node, but node can easily be swapped in by removing `bun.lockb` from the frontend and backend and doing `npm install` instead.

## Get Started

### Setup the backend API

1. Clone the backend app.

   `$ git clone <git@github.com>:chevcast/limble-search-demo-backend.git && cd ./limble-search-demo-backend`

2. (temporary step) Check out the `cors-hotfix` branch.

   `$ git checkout cors-hotfix`

3. Install dependencies.

   `$ bun install`

4. Start the backend.

   `$ bun start`

### Now setup the frontend

1. Clone the repo.

   `$ git clone <git@github.com>:chevcast/limble-search-demo-frontend.git`

2. Install dependencies.

   `$ bun install`

3. Start the application!

   `$ bun start`

As long as the backend is running at `localhost:3000` then the frontend should be able to connect right up!
