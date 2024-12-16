## What changed

- {Describe changes here}

## Evidence

- {Provide screenshots and/or screen recording}

## How to test

- Get the code

```bash
git clone git@github.com:vikoperdomo/unit-conversion.git
cd unit-conversion
git checkout {branch-name}
npm i
```

- Test the code

```bash
npm run lint
npm run test
```

- Run the App

```bash
npm run start:dev
```

## What to check

Verify that the following are valid:

#### Specific to this PR

- {Provide a description of what your new fix/feature does, and how to test that it works as expected}

#### Generalities

- `npm run lint` and `npm run test` should pass
- Verify the code changes work as expected by running on a local machine both in development and production modes
- Application runs without any errors
- Verify the browser console for any errors
- Review the test spec changes. Verify new tests are added to cover all new changes. Also verify test specs covers both happy path and failure path like exceptional or error conditions
- Changelog file is updated
- Review if any changes are needed to README prescription or any other project documents
- Delete the branch after merging back with the `dev` branch
