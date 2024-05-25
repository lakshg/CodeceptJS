# Al Jazeera Test Automation

## Project Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. `npx chromedriver --port=9515` Set up the port fro chromdriver.
4. `chromedriver --port=9515 --whitelisted-ips="127.0.0.1"` Whitelisting the IP
5. Run tests with `npx codeceptjs run --plugins allure`.

## Reporting

1. To generate Allure reports, run `allure generate ./output --clean`.
2. To open Allure reports, run `allure open ./output`.

## Project Structure

- `pages/`: Contains Page Object Model files.
- `features/`: Contains BDD feature files.
- `step_definitions/`: Contains step definitions for BDD scenarios.
- `tests/`: Contains test implementation files.
- `output/`: Contains test execution reports.
- `data/`: Contains test data in JOSN format


## Execution

Run the tests using the following command:

```bash
npx codeceptjs run --plugins allure


