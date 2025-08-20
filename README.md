# Playwright Test Automation

This project contains automated tests using [Playwright](https://playwright.dev/) for testing web applications.  
It includes login test cases with different scenarios such as successful login, incorrect email, and incorrect password.

---

## 📦 Installation


1. Install dependencies:

    npm install


2. (Optional) Create a .env file to store environment variables:

BASE_URL=https://example.com
USERNAME=testuser@example.com
PASSWORD=yourpassword


▶️ Running Tests

1. Run all tests:

npx playwright test


2. Run tests with UI:

npx playwright test --ui


3. Run a specific test file:

npx playwright test tests/login.spec.ts


4. Run headed mode (show browser):

npx playwright test --headed