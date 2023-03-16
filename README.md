# React Server Component with Prisma

## Setting Environement

### Install core libraries

`node` doesn't have `--conditions` option now, so use JavaScript instead of TypeScript.
The app with latest `react@experimental` and etc will be crashed for webpack, thus use fixed experimental version here.

```sh
npm install react@0.0.0-experimental-0cc724c77-20211125 react-dom@0.0.0-experimental-0cc724c77-20211125 react-server-dom-webpack@0.0.0-experimental-0cc724c77-20211125 react-fetch@0.0.0-experimental-0cc724c77-20211125
```

```sh npm install --save-dev webpack webpack-cli html-webpack-plugin
touch webpack.config.js
```

### Install linter and formatter

```sh
npm init @eslint/config

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard
✔ What format do you want your config file to be in? · YAML
Checking peerDependencies of eslint-config-standard@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm
```

```sh
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
```

```sh
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-import eslint-plugin-unused-imports
```

### Install others

```sh
npm install react-error-boundary --force
npm install --save-dev rimraf
npm install --save-dev concurrently
```

```sh
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
touch .babelrc
```

### Create client-side

Add files that composes for react.

```sh
mkdir public
touch public/index.html
touch public/style.css
```

```sh
mkdir src
touch src/index.client.jsx
touch src/App.client.jsx
touch src/Root.client.jsx
touch src/LocationContext.client.jsx
```

Create more client-side components.

### Create server-side

```sh
npm install express compression
npm install --save-dev @babel/register
```

```sh
mkdir server
touch server/api.server.js
touch server/package.json
```

```sh
touch src/App.server.jsx
```

Create more server-side components.

### Create DB

```sh
npm install react-prisma --force
npm install --save-dev prisma
npx prisma init --datasource-provider postgresql
prisma generate
```

```sh
touch prisma/seed.js
touch docker-compose.yml
```

Update `.env`, and run

```sh
npm run db:init
```

Create a component for connecting DB.

```sh
touch db.server.js
```

### Getting Started

```sh
npm install --force
prisma generate
npm run db:init
npm run start
```
