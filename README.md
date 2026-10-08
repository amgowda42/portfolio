Personal Portfolio Website.

## Continuous integration

The GitHub Actions workflow runs when code is pushed to `main` or a pull
request is opened against `main`. It uses Node.js 24, installs dependencies
with `npm ci`, and runs `npm run verify` to build the application and lint the
code.
