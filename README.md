# TaskHub-app

[![Production Release](https://github.com/taskhub-team/taskhub-app/actions/workflows/production-release.yml/badge.svg)](https://github.com/taskhub-team/taskhub-app/actions/workflows/production-release.yml) ![Codecov](https://codecov.io/gh/taskhub-team/taskhub-app/branch/main/graph/badge.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) ![Semantic Versioning](https://img.shields.io/badge/semver-2.0.0-brightgreen) ![pnpm](https://img.shields.io/badge/pnpm-10.6.3-orange) ![Node.js Version](https://img.shields.io/badge/node-v22.14.0-green) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/taskhub-team/taskhub-app)

TaskHub-app is a minimalist task management application built with modern web technologies. This project serves as a showcase for React, TypeScript, and CI/CD pipeline implementation.

## Key Features

- Modern React and TypeScript setup
- CI/CD pipeline with GitHub Actions
- Automated semantic versioning with semantic-release
- Multi-environment deployment (preview, production)

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **CI/CD**: GitHub Actions
- **Versioning**: semantic-release with Conventional Commits
- **Deployment**: Azure Static Web Apps

## Continuous Integration and Deployment

TaskHub-app uses a robust CI/CD pipeline with GitHub Actions that includes:

1. **Build Artifacts Storage**

   - Every build is archived in Azure Blob Storage with appropriate versioning
   - Production builds include semantic version numbers in filenames and are retained for 3 months
   - Preview builds are retained for 9 days
   - GitHub Actions artifacts are also available for download
   - Latest builds for each environment are specially tagged

2. **Environment Deployments**

   - **Preview**: Manual deployment for feature testing
   - **Production**: Automatic deployment with semantic versioning when code is merged to `main`

3. **Build Access**
   - Production builds: `https://<storage-account>.blob.core.windows.net/builds/production/taskhub-latest.zip`
   - Preview builds: `https://<storage-account>.blob.core.windows.net/builds/<preview-env>/taskhub-latest.zip`
   - Historical builds with timestamps are also preserved

This approach simulates an enterprise-level artifact management system with proper versioning and easy access to all builds.

## Project Setup

This project uses **pnpm** as the package manager and enforces a specific Node.js version using **Volta**.

- **Node.js version:** `22.14.0` (managed via Volta)
- **pnpm version:** `10.6.3`

To ensure compatibility, install Volta and let it manage the correct versions automatically:

```sh
curl https://get.volta.sh | bash
volta install node@22.14.0 pnpm@10.6.3
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Lint code
- `pnpm release` - Manually trigger semantic-release
- `pnpm audit --fix` - Checks for known security issues with the installed packages and fixes them(if `--fix` is used).

## Links to Environments

1. **[Production](https://witty-mushroom-0ba06a800.6.azurestaticapps.net)**
2. **[Preview Environment 1](https://polite-cliff-035266300-preview1.eastasia.6.azurestaticapps.net)**
3. **[Preview Environment 2](https://polite-cliff-035266300-preview2.eastasia.6.azurestaticapps.net)**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
