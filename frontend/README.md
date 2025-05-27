# GydeXP Frontend Assignment

This is NextJS project made for the GydeXP assignment. This involves the frontend code of the assignment that fetches data from the DB and renders it in a table.

## Built using
* NextJS
* Tanstack Query

## Hosted On 
* Vercel
Live link: https://travel-studio-intern-assignment.vercel.app/

## Pages
* / -> Renders those requests that have status as pending in table form. The ui is responsive and mobile friendly.


## Project Structure
``` 
    src/
      |
      |---- app
      |      |
      |      |---- api/requests/rotue.ts # fetch requests from DB.
      |      |
      |      |---- layout.tsx # entry point for a NextJS application
      |      |---- providers.tsx # Tanstack query provider.
      |      |---- Page.tsx # Renders content of /page
      |
      |---- components # Contains all components of application
      |---- controller # Contains function to fetch data using TSQ
      |---- lib # Helpers or connections to DB
```

## Steps to run app locally

1. Ensure you have node installed in your PC.
2. Clone the github repo and do cd path_to_repo/frontend/
3. Copy .env.sample to .env 
4. Do npm install
5. Run npm run dev
6. Your app will be live on http://localhost:3000

> Note: If your backend is not up and you are in dev mode then please follow backend guide to run your backend first. (Or you can follow the prisma part of the backend in frontend also so that you won't have to run backend separately.)

