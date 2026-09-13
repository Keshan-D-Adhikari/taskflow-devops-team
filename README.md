# TaskFlow - Todo List Application

## Group Information

- **Student 1:** A.M.K.D. Adhikari — ITBIN-2211-0137
  **Role:** Full-Stack Developer
- **Student 2:** Lakshan Thenuka — ITBIN-2211-0304
  **Role:** DevOps Engineer

## Project Description

TaskFlow is a simple and responsive Todo application demonstrating automated CI/CD workflows.

The application allows users to create, manage, complete, delete, and filter daily tasks. Task data is stored using browser Local Storage, allowing tasks to remain available even after the page is refreshed.

This project also demonstrates professional Git workflows, automated testing, Continuous Integration (CI), Continuous Deployment (CD), and cloud deployment using GitHub Actions and GitHub Pages.

## Live Deployment

**Live URL:** https://keshan-d-adhikari.github.io/taskflow-devops-team/

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- ESLint
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Local Storage

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by All / Active / Completed
- Task counter
- Clear completed tasks
- Persistent task storage using Local Storage
- Responsive user interface
- Automated testing
- Automated CI/CD pipeline
- Automatic deployment to GitHub Pages

## Branch Strategy

This project follows a Git Flow style branching strategy.

- `main` - Production-ready branch and deployment source
- `feature/frontend-tasks` - Frontend task-management functionality
- `feature/devops-cicd` - CI/CD, tests, build, and deployment configuration
- `docs/team-documentation` - Team documentation updates

Feature branches are reviewed through Pull Requests and merged into `main` after CI checks pass.

## Individual Contribution

### A.M.K.D. Adhikari — Full-Stack Developer

- Developed the Todo application interface
- Added responsive CSS styling
- Implemented task creation and deletion
- Implemented task completion functionality
- Implemented task filtering
- Implemented task counter functionality
- Implemented Local Storage persistence
- Created the `feature/frontend-tasks` branch and frontend Pull Request
- Reviewed the DevOps Pull Request and maintained project documentation

### Lakshan Thenuka — DevOps Engineer

- Configured GitHub Actions CI workflow
- Configured GitHub Pages deployment workflow
- Added ESLint configuration, automated tests, and the production build process
- Added `.gitignore`, package configuration, and dependency lock file
- Created the `feature/devops-cicd` branch and DevOps Pull Request
- Reviewed the frontend Pull Request and monitored CI/CD checks

## Setup & Installation Instructions

### Prerequisites

Before running the project locally, install:

- Node.js 18 or higher
- Git

### Clone the Repository

```bash
git clone https://github.com/Keshan-D-Adhikari/taskflow-devops-team.git
```

Navigate into the project directory:

```bash
cd taskflow-devops-team
```

### Install Dependencies

```bash
npm install
```

### Run Lint Check

```bash
npm run lint
```

### Run Automated Tests

```bash
npm test
```

### Build the Project

```bash
npm run build
```

The production build is generated using the project's build script.

## CI/CD Deployment Process

The project uses GitHub Actions for Continuous Integration and Continuous Deployment.

### Continuous Integration

The CI workflow is defined in:

```text
.github/workflows/ci.yml
```

The CI pipeline performs the following checks:

1. Checks out the repository code
2. Sets up Node.js
3. Installs project dependencies
4. Runs ESLint
5. Builds the project
6. Runs automated tests

The CI workflow runs on relevant pushes and Pull Requests to ensure that changes are tested before being integrated.

### Continuous Deployment

The deployment workflow is defined in:

```text
.github/workflows/deploy.yml
```

When production changes reach the `main` branch, GitHub Actions automatically deploys the application to GitHub Pages.

The deployment workflow:

1. Checks out the production code
2. Configures GitHub Pages
3. Prepares the deployment artifact
4. Uploads the artifact
5. Deploys the application to GitHub Pages

## Testing

Automated tests are included in the `tests` directory.

The tests verify important parts of the application, including:

- Main HTML structure
- Todo interface elements
- JavaScript application file
- Required application components

Testing can be executed locally using:

```bash
npm test
```

Lint checking can be executed using:

```bash
npm run lint
```

## Git Workflow

Development was organized using separate branches for different areas of the project.

The workflow used was:

```text
feature/* → develop → main
```

Changes were committed using meaningful Conventional Commit style messages such as:

```text
feat: implement task management functionality
style: add responsive todo interface
test: add automated tests and lint configuration
build: add production build script
ci: add continuous integration workflow
ci: add GitHub Pages deployment workflow
docs: add project documentation
```

Pull Requests were used to review and integrate feature branches into `main`.

## Deployment Note

GitHub Pages is configured to deploy through GitHub Actions. The deployment workflow builds the application from `src/`, publishes the generated `dist/` folder, and runs whenever changes are merged into `main`.

## Build Status

![CI Pipeline](https://github.com/Keshan-D-Adhikari/taskflow-devops-team/actions/workflows/ci.yml/badge.svg)

![Deploy to GitHub Pages](https://github.com/Keshan-D-Adhikari/taskflow-devops-team/actions/workflows/deploy.yml/badge.svg)

## Deployment Verification

The deployed application has been tested to confirm:

- The application loads successfully
- Tasks can be added
- Tasks can be completed
- Tasks can be deleted
- Task filters work correctly
- Task counter works correctly
- Local Storage persists tasks after page refresh
- GitHub Actions CI workflow passes
- GitHub Pages deployment completes successfully

## Repository Structure

```text
taskflow-devops-team/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── scripts/
│   └── build.js
├── src/
│   ├── index.html
│   ├── styles/
│   │   └── style.css
│   └── scripts/
│       └── app.js
├── tests/
│   └── app.test.js
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

## License

This project was created for educational purposes as part of the Advanced Git & DevOps Team Collaboration Assignment.

