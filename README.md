# Playwright-VS

A cross-browser end-to-end testing project using [Playwright](https://playwright.dev/). This project is set up to run tests on Chromium, Firefox, and WebKit, and is ready for CI integration with GitHub Actions.

## Features
- Automated E2E tests with Playwright
- Multi-browser support (Chromium, Firefox, WebKit)
- Parallel test execution
- Multiple reporters: HTML, JSON, JUnit, and GitHub Actions
- CI-ready with GitHub Actions workflow
- Test results and reports are saved in `test-results/` and `playwright-report/`

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Playwright-VS
   ```
2. Install dependencies:
   ```sh
   npm ci
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install --with-deps
   ```

### Running Tests Locally

To run all tests:
```sh
npx playwright test
```

To view the HTML report after running tests:
```sh
npx playwright show-report
```

### Test Directory Structure
- All tests are located in the `tests/` directory.
- Test results and reports are output to `test-results/` and `playwright-report/`.

### Configuration
- Test configuration is in `playwright.config.js`.
- You can customize browsers, reporters, and other settings there.

### Running in CI (GitHub Actions)
This project includes a workflow at `.github/workflows/playwright.yml` that will automatically run tests on push and pull request to the `main` branch. Test results and reports are uploaded as artifacts.

## Useful Commands
- Run tests: `npx playwright test`
- Show HTML report: `npx playwright show-report`
- Run a specific test: `npx playwright test tests/example.spec.js`

## Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test Reporters](https://playwright.dev/docs/test-reporters)

---

Feel free to customize this project for your own testing needs!
