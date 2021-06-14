<div align="center">
  <img alt="logo" src=".github/logo.svg" width="25%"/>
</div>

## 🖥 Tecnologies

This project was developed using cutting edge front-end technologies.

- [ReactJS](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Context API](https://reactjs.org/docs/context.html)
- [Axios (for HTTP calls)](https://github.com/axios/axios)
- [Nookies (cookie helpers for Next.js)](https://github.com/maticzav/nookies)
- [Styled Components](https://styled-components.com/)
- [Polished](https://polished.js.org/docs/)
- [Prop Types](https://www.npmjs.com/package/prop-types)
- [React Hook Form](https://react-hook-form.com/)
- [Storybook (for component documentation)](https://storybook.js.org/)
- [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) (Linter and Code Formatter)

## ❓Why did I use Context API

I decided to use context API, because the application only needs to work with authentication and book listing. Because the application does not have so many states that would be shared, it was not necessary to use redux.

## 🚀 Getting started

### Requirements

- You need to install both [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) to run this project.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/diegogasparcruz/desafio-books-frontend.git && cd desafio-books-frontend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Run the web server
$ yarn dev
```

The app will be available for access on your browser at `http://localhost:3000`

**Run component documentation**

```bash
# Run storybook
$ yarn storybook
```

The component documentation will be available for access on your browser at `http://localhost:6006`
