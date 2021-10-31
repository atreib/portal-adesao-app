# Portal de adesão 2.0

## Libs and frameworks

- React (with Typescript)
- Next.js
- Tailwind CSS
- Auth0
  - Create Tenant
  - Create Application
  - Go to `Application Settings`
  - Add `http://localhost:3000/api/auth/callback` to `Allowed Callback URLs`
  - Add `http://localhost:3000` to `Allowed Logout URLs`
  - `yarn add @auth0/nextjs-auth0`
  - Fill the `/.env` file with the data provided on the Application Tab


