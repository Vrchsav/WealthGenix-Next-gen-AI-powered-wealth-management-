# Wealthgenix

Wealthgenix is a web application built with Next.js, React, and Tailwind CSS. It provides a platform for managing and visualizing financial data.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Usage](#usage)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [License](#license)
- [Changelog](#changelog)

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Scripts

- `dev`: Starts the development server with Turbopack.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for linting errors.

## Dependencies

- `@clerk/nextjs`: ^6.9.15
- `@radix-ui/react-checkbox`: ^1.1.3
- `@radix-ui/react-dialog`: ^1.1.4
- `@radix-ui/react-dropdown-menu`: ^2.1.4
- `@radix-ui/react-popover`: ^1.1.4
- `@radix-ui/react-progress`: ^1.1.1
- `@radix-ui/react-select`: ^2.1.4
- `@radix-ui/react-slot`: ^1.1.1
- `@radix-ui/react-switch`: ^1.1.2
- `@radix-ui/react-tooltip`: ^1.1.6
- `class-variance-authority`: ^0.7.1
- `clsx`: ^2.1.1
- `date-fns`: ^4.1.0
- `lucide-react`: ^0.473.0
- `next`: 15.1.5
- `react`: ^19.0.0
- `react-day-picker`: ^8.10.1
- `react-dom`: ^19.0.0
- `tailwind-merge`: ^2.6.0
- `tailwindcss-animate`: ^1.0.7
- `vaul`: ^1.1.2

## Dev Dependencies

- `@eslint/eslintrc`: ^3
- `eslint`: ^9
- `eslint-config-next`: 15.1.5
- `postcss`: ^8.5.1
- `tailwindcss`: ^3.4.17

## Usage

To start the development server, run:

```bash
npm run dev
```

To build the application for production, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm start
```

To lint the code, run:

```bash
npm run lint
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.

## Changelog

### v0.1.0

- Initial release with basic setup and dependencies.
- Added Footer component.
- Updated `package.json` with new dependencies.
- Created `README.md` with project information and usage instructions.

### v0.2.0

- Added `Header` component with authentication and navigation links.
- Added `ModeToggle` component for dark mode support.
- Updated `Footer` component with additional links and social media icons.
- Updated `Home` page with a button component.
- Updated `tailwind.config.js` to include the correct paths for content.

### v0.3.0

- Updated `Header` component to include logo and additional navigation links.
- Updated `Footer` component with newsletter subscription form.
- Updated `Home` page with a new button text.
- Updated `package.json` with `@clerk/nextjs` dependency.
