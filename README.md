# TaskFlow - Todo List Application

## Group Information

- **Student:** A.M.K.D.Adhikari - ITBIN-2211-0137
- **Role:** Full-Stack Developer / DevOps Engineer

## Project Description

TaskFlow is a simple and responsive Todo application demonstrating automated CI/CD workflows.

The application allows users to create, manage, complete, delete, and filter daily tasks. Task data is stored using browser Local Storage, allowing tasks to remain available even after the page is refreshed.

This project also demonstrates professional Git workflows, automated testing, Continuous Integration (CI), Continuous Deployment (CD), and cloud deployment using GitHub Actions and GitHub Pages.

## Live Deployment

🔗 **Live URL:** https://keshan-d-adhikari.github.io/todo-devops-assignment/

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
- `develop` - Integration and testing branch
- `feature/task-management` - Task management functionality
- `feature/testing` - Automated tests and build configuration
- `feature/devops` - CI/CD workflows and documentation

Feature branches are integrated into `develop` through Pull Requests. After testing and verification, `develop` is merged into `main` through a release Pull Request.

## Individual Contribution

### A.M.K.D.Adhikari

- Created and configured the GitHub repository
- Created the project structure
- Developed the Todo application interface
- Added responsive CSS styling
- Implemented task creation and deletion
- Implemented task completion functionality
- Implemented task filtering
- Implemented task counter functionality
- Implemented Local Storage persistence
- Added automated tests
- Configured ESLint
- Added the production build process
- Configured the GitHub Actions CI pipeline
- Configured the GitHub Pages deployment workflow
- Managed feature branches and Pull Requests
- Configured GitHub Pages deployment
- Tested the deployed application
- Created and maintained project documentation

## Setup & Installation Instructions

### Prerequisites

Before running the project locally, install:

- Node.js 18 or higher
- Git

### Clone the Repository

```bash
git clone https://github.com/Keshan-D-Adhikari/todo-devops-assignment.git
```

Navigate into the project directory:

```bash
cd todo-devops-assignment
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

Pull Requests were used to integrate feature branches into `develop`, followed by a final Pull Request from `develop` into `main`.

## Challenges & Resolutions

### GitHub Pages Deployment Configuration

During the initial GitHub Pages deployment, the workflow could not access the Pages environment because GitHub Pages had not yet been enabled for GitHub Actions.

This was resolved by configuring GitHub Pages to use GitHub Actions as the deployment source.

### GitHub Pages Environment Protection

A deployment attempt was also blocked because the `main` branch was not initially permitted by the `github-pages` environment deployment rules.

The `main` branch was added to the allowed deployment branches under the GitHub environment settings. The deployment workflow was then re-run successfully.

### Default Branch Configuration

The repository initially had a feature branch configured as its default branch.

This was corrected by changing the repository default branch to `main`, ensuring that the production-ready branch is the primary repository branch.

### Merge Conflict Demonstration

A merge conflict was intentionally created in `README.md` by making different changes on the `main` and `feature/conflict-demo` branches.

Git detected the content conflict during the merge process. The conflict was reviewed and resolved, the corrected file was staged, and the resolution was committed using:

`fix: resolve README merge conflict`

The completed conflict-resolution changes were submitted through Pull Request #5 and successfully merged into the `develop` branch.

## Build Status

![CI Pipeline](https://github.com/Keshan-D-Adhikari/todo-devops-assignment/actions/workflows/ci.yml/badge.svg)

![Deploy to GitHub Pages](https://github.com/Keshan-D-Adhikari/todo-devops-assignment/actions/workflows/deploy.yml/badge.svg)

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
todo-devops-assignment/
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

# taskflow-devops-team
