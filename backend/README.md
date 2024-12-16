# Backend Service - Unit Conversion API

## Overview

This API provides tools for science teachers to grade unit conversion problems entered by students. The system supports conversions for:

1. **Temperatures**: Kelvin, Celsius, Fahrenheit, Rankine.
2. **Volumes**: liters, tablespoons, cubic-inches, cups, cubic-feet, gallons.

---

## Features

- Validates student responses as `correct`, `incorrect`, or `invalid`.
- Handles temperature and volume conversions.
- API-first design with Swagger for seamless documentation and testing.
- Fully tested using `jest` with 80%+ code coverage.
- Production-ready with CI/CD and linting integration.

---

## Prerequisites

The following versions of Node.js and npm are required:

| Node Version | NPM Version |
| ------------ | ----------- |
| 20.18.x      | 10.9.x      |

Ensure you are using the correct Node.js version before proceeding.

---

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npm run build
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Run the Production Server

```bash
npm start
```

---

## Using NVM (Node Version Manager)

### Install Node.js v20.x

Ensure you are using the correct Node.js version by using **NVM**:

1. Install NVM (if not already installed):

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   ```

   Restart your terminal or run:

   ```bash
   source ~/.nvm/nvm.sh
   ```

2. Install Node.js version 20.x:

   ```bash
   nvm install 20
   ```

3. Use Node.js version 20.x in the project:

   ```bash
   nvm use 20
   ```

4. To ensure consistency, set Node.js 20 as the default for this project:
   ```bash
   nvm alias default 20
   ```

You can now proceed with the usual installation and setup steps.

---

## API Documentation

### 1. Serve Swagger Documentation Locally

```bash
npm run swagger:serve
```

Access it at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

### 2. Example API Usage

#### Endpoint: `POST /api/convert`

**Request Body**:

```json
{
  "input": 84.2,
  "inputUnit": "Fahrenheit",
  "targetUnit": "Rankine",
  "studentResponse": 543.94
}
```

**Response**:

```json
{
  "status": "correct",
  "authoritativeAnswer": 543.87,
  "explanation": "The student response matches the authoritative answer."
}
```

---

## Testing

Run all unit tests with coverage:

```bash
npm test
```

---

## Linting & Formatting

### Run ESLint:

```bash
npm run lint
```

### Auto-Fix Lint Issues:

```bash
npm run lint:fix
```

### Format Code with Prettier:

```bash
npm run format
```

---

## CI/CD Pipeline (Optional)

A CI/CD pipeline is integrated with GitHub Actions to ensure:

1. Automated tests run on every push.
2. Linting and formatting checks are applied.
3. Successful deployment on merging to the `main` branch.

---

## Directory Structure

```plaintext
backend/
├── dist/                  # Compiled TypeScript code
├── src/                   # Source code
│   ├── app.ts             # Main application file
│   ├── routes             # Route definitions
│   ├── middleware         # Middlewares for error and logging
│   ├── services           # Business logic
│   ├── utils              # Utility functions
│   ├── constants          # Shared constants
│   ├── types              # Shared type definitions
├── swagger/               # Swagger configuration
├── tests/                 # Unit tests
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
└── README.md              # Project documentation
```
