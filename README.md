This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Design

Created following interfaces to represent the data:
TypeMetadata: To represent each start wars data type i.e., starships, vehciles and films
FieldMetadata: To represent mapping of the properties in api response and data fields on the UI and other required metadata like sorting. This can be expanded to include other metadata information, if required.

Created a map object containing starwars data type i.e., films, vehicles etc., and relavant fields metadata to drive the UI. Used the map object to generate the static paths for different types of data and sorting of data.

## Further improvements

There is a scope to improve the code in the following areas:
1) Error handling: At this moment, the error handling in the code is very minimal. I feel that there is a log of scope make improvments in that area.
2) Metadata: At this moment, type and field metadata information is being stored in a Map object. In the future, we could store the information in database, so that we cam easily add new types of data like people etc., without making any changes to the UI

## Final thoughts

I have made few assumptions like using a dropdownlist instead of input element like a textbox. Certainly there is a lot of scope to improve the UI, but I hope current UI is sufficient enough for the task. 
