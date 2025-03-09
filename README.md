# Wealthgenix

Wealthgenix is a comprehensive financial management application that leverages AI to help users manage their finances effectively. The platform includes features such as transaction management, budget tracking, receipt scanning, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication using Clerk.
- **Transaction Management**: Create, update, and delete transactions.
- **Budget Tracking**: Set and track monthly budgets.
- **Receipt Scanning**: Scan receipts and extract transaction details using Google Generative AI.
- **Email Notifications**: Send email notifications using Resend.
- **Rate Limiting**: Protect endpoints with rate limiting using ArcJet.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Vrchsav/WealthGenix-Next-gen-AI-powered-wealth-management-.git    # AI Finance Platform
    
    AI Finance Platform is a comprehensive financial management application that leverages AI to help users manage their finances effectively. The platform includes features such as transaction management, budget tracking, receipt scanning, and more.
    
    ## Table of Contents
    
    - [Features](#features)
    - [Installation](#installation)
    - [Usage](#usage)
    - [API Endpoints](#api-endpoints)
    - [Environment Variables](#environment-variables)
    - [Contributing](#contributing)
    - [License](#license)
    
    ## Features
    
    - **User Authentication**: Secure user authentication using Clerk.
    - **Transaction Management**: Create, update, and delete transactions.
    - **Budget Tracking**: Set and track monthly budgets.
    - **Receipt Scanning**: Scan receipts and extract transaction details using Google Generative AI.
    - **Email Notifications**: Send email notifications using Resend.
    - **Rate Limiting**: Protect endpoints with rate limiting using ArcJet.
    
    ## Installation
    
    1. Clone the repository:
        ```bash
        git clone https://github.com/your-username/ai-finance-platform.git
        cd ai-finance-platform
        ```
    
    2. Install dependencies:
        ```bash
        npm install
        ```
    
    3. Set up environment variables:
        Create a `.env` file in the root directory and add the following variables:
        ```env
        GEMINI_API_KEY=your_gemini_api_key
        RESEND_API_KEY=your_resend_api_key
        CLERK_API_KEY=your_clerk_api_key
        DATABASE_URL=your_database_url
        ```
    
    4. Run the development server:
        ```bash
        npm run dev
        ```
    
    ## Usage
    
    ### Authentication
    
    The application uses Clerk for user authentication. Users can sign in and manage their accounts securely.
    
    ### Transactions
    
    Users can create, update, and delete transactions. Transactions can be categorized as income or expense, and users can view their transaction history.
    
    ### Budget Tracking
    
    Users can set a monthly budget and track their expenses against the budget. The application provides insights into spending patterns.
    
    ### Receipt Scanning
    
    Users can upload receipt images, and the application will extract transaction details using Google Generative AI.
    
    ### Email Notifications
    
    The application can send email notifications for various events using the Resend service.
    
    ## API Endpoints
    
    ### Transactions
    
    - `POST /api/transactions`: Create a new transaction.
    - `GET /api/transactions/:id`: Get details of a specific transaction.
    - `PUT /api/transactions/:id`: Update a transaction.
    - `DELETE /api/transactions/:id`: Delete a transaction.
    
    ### Accounts
    
    - `POST /api/accounts`: Create a new account.
    - `GET /api/accounts`: Get a list of user accounts.
    - `GET /api/accounts/:id`: Get details of a specific account.
    - `PUT /api/accounts/:id`: Update an account.
    - `DELETE /api/accounts/:id`: Delete an account.
    
    ### Budgets
    
    - `GET /api/budgets/current`: Get the current budget.
    - `PUT /api/budgets`: Update the budget.
    
    ### Receipt Scanning
    
    - `POST /api/receipts/scan`: Scan a receipt and extract transaction details.
    
    ## Environment Variables
    
    - `GEMINI_API_KEY`: API key for Google Generative AI.
    - `RESEND_API_KEY`: API key for Resend service.
    - `CLERK_API_KEY`: API key for Clerk authentication.
    - `DATABASE_URL`: URL for the database connection.
    
    ## Contributing
    
    Contributions are welcome! Please follow these steps to contribute:
    
    1. Fork the repository.
    2. Create a new branch (`git checkout -b feature-branch`).
    3. Make your changes.
    4. Commit your changes (`git commit -m 'Add new feature'`).
    5. Push to the branch (`git push origin feature-branch`).
    6. Open a pull request.
    
    ## License
    
    This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
    cd ai-finance-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    GEMINI_API_KEY=your_gemini_api_key
    RESEND_API_KEY=your_resend_api_key
    CLERK_API_KEY=your_clerk_api_key
    DATABASE_URL=your_database_url
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

## Usage

### Authentication

The application uses Clerk for user authentication. Users can sign in and manage their accounts securely.

### Transactions

Users can create, update, and delete transactions. Transactions can be categorized as income or expense, and users can view their transaction history.

### Budget Tracking

Users can set a monthly budget and track their expenses against the budget. The application provides insights into spending patterns.

### Receipt Scanning

Users can upload receipt images, and the application will extract transaction details using Google Generative AI.

### Email Notifications

The application can send email notifications for various events using the Resend service.

## API Endpoints

### Transactions

- `POST /api/transactions`: Create a new transaction.
- `GET /api/transactions/:id`: Get details of a specific transaction.
- `PUT /api/transactions/:id`: Update a transaction.
- `DELETE /api/transactions/:id`: Delete a transaction.

### Accounts

- `POST /api/accounts`: Create a new account.
- `GET /api/accounts`: Get a list of user accounts.
- `GET /api/accounts/:id`: Get details of a specific account.
- `PUT /api/accounts/:id`: Update an account.
- `DELETE /api/accounts/:id`: Delete an account.

### Budgets

- `GET /api/budgets/current`: Get the current budget.
- `PUT /api/budgets`: Update the budget.

### Receipt Scanning

- `POST /api/receipts/scan`: Scan a receipt and extract transaction details.

## Environment Variables

- `GEMINI_API_KEY`: API key for Google Generative AI.
- `RESEND_API_KEY`: API key for Resend service.
- `CLERK_API_KEY`: API key for Clerk authentication.
- `DATABASE_URL`: URL for the database connection.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.# Full Stack AI Fianace Platform with Next JS, Supabase, Tailwind, Prisma, Inngest, ArcJet, Shadcn UI Tutorial 🔥🔥
## https://youtu.be/egS6fnZAdzk

<img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432">

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```
