# Redmine Playwright Automation

UI automation project for https://www.redmine.org/

## Project includes

* 5 manual test cases
* Playwright automated tests
* Page Object Model (POM)
* Playwright HTML Report
* Allure Report
* GitHub Actions CI pipeline

## Tech stack

* Playwright
* JavaScript
* Node.js
* Allure Report
* GitHub Actions

## Test documentation

docs/Redmine_Playwright_Automation.xlsx

## Run tests

```bash
npm install
npx playwright install
npx playwright test
```

## Open Playwright report

```bash
npx playwright show-report
```

## Generate Allure report

```bash
npx allure generate allure-results --clean -o allure-report
```

## Open Allure report

```bash
npx allure open allure-report
```
