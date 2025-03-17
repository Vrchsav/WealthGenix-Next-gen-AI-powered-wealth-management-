# WealthGenix

WealthGenix is a next-generation AI-powered wealth management platform that leverages artificial intelligence to help users manage their finances effectively. The platform includes advanced features such as intelligent transaction management, predictive budget tracking, AI-powered receipt scanning, and personalized financial insights.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- **AI-Powered Financial Analysis**: Advanced analytics using Google's Generative AI to provide personalized financial insights and recommendations.
- **Secure User Authentication**: Enterprise-grade security using Clerk authentication system.
- **Smart Transaction Management**: Intelligent categorization and tracking of income and expenses.
- **Predictive Budget Tracking**: AI-driven budget recommendations and spending pattern analysis.
- **Automated Receipt Processing**: Instant receipt scanning and data extraction using Google Generative AI.
- **Real-time Email Notifications**: Automated financial alerts and reports using Resend service.
- **Enterprise-Grade Security**: Rate limiting protection using ArcJet.
- **Multi-Currency Support**: Handle transactions in multiple currencies for international users.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Vrchsav/WealthGenix-Next-gen-AI-powered-wealth-management-.git
    cd WealthGenix-Next-gen-AI-powered-wealth-management-
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory with the following variables:
    ```env
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

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

### Intelligent Authentication

WealthGenix implements Clerk for secure user authentication, providing features like:
- Multi-factor authentication
- Social login integration
- Secure session management
- Custom onboarding flows

### Smart Transaction Management

- Automated transaction categorization using AI
- Real-time transaction tracking and analysis
- Custom category creation and management
- Detailed transaction history with search and filter capabilities

### AI-Powered Budget Tracking

- Intelligent budget recommendations based on spending patterns
- Real-time budget monitoring and alerts
- Visual budget analytics and forecasting
- Category-wise budget allocation

### Advanced Receipt Processing

- Instant receipt scanning with OCR technology
- AI-powered data extraction for transaction details
- Automatic categorization of expenses
- Digital receipt storage and organization

### Automated Notifications

- Customizable financial alerts
- Monthly financial report generation
- Budget threshold notifications
- Transaction confirmation alerts

## API Endpoints

### Transactions
- `POST /api/transactions`: Create a new transaction with AI categorization
- `GET /api/transactions/:id`: Retrieve transaction details with insights
- `PUT /api/transactions/:id`: Update transaction information
- `DELETE /api/transactions/:id`: Remove a transaction

### Financial Accounts
- `POST /api/accounts`: Add a new financial account
- `GET /api/accounts`: Retrieve all linked accounts
- `GET /api/accounts/:id`: Get specific account details
- `PUT /api/accounts/:id`: Update account information
- `DELETE /api/accounts/:id`: Remove an account

### Budget Management
- `GET /api/budgets/current`: Get current budget with AI insights
- `PUT /api/budgets`: Update budget allocations
- `GET /api/budgets/analysis`: Get AI-powered budget analysis

### Receipt Processing
- `POST /api/receipts/scan`: Process and analyze receipt images
- `GET /api/receipts/history`: View processed receipt history

## Environment Variables

- `DATABASE_URL`: PostgreSQL database connection URL
- `DIRECT_URL`: Direct database connection URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Public key for Clerk authentication
- `CLERK_SECRET_KEY`: Secret key for Clerk authentication
- `GEMINI_API_KEY`: API key for Google's Generative AI services
- `RESEND_API_KEY`: API key for email notification service
- `ARCJET_KEY`: API key for rate limiting protection

## Contributing

We welcome contributions to WealthGenix! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.
