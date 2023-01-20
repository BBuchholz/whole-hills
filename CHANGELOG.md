
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project endeavors to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)., feel free to submit a bug report where we fall short (each one teach one)

## [0.0.5] - 2023-01-19

## Added

- Custom Cypress Command "getByData"
- Cypress Spec File: Subscribe

## Changed

- Replaced verbose code form with call to getByData

## [0.0.4] - 2023-01-18

### Changed

- Refactored to DRY out the tests by using beforeEach() 




## [0.0.3] - 2023-01-17

### Added

- Cypress tests for feature dt's



## [0.0.2] - 2023-01-16

### Added

- Cypress Types

### Fixed

- Cypress Related warnings in VSCode
    - isolated modules warning fixed by adding `export {}` line to home.cy.ts
    - type warnings from vscode not recognizing types in cypress test files




## [0.0.1] - 2023-01-15

### Added

- README info regarding the project name
- THIS CHANGELOG FILE




## [Unreleased]

### Added 

- Created repo for whole-hills
- Setup everything with "npx cypress open"
- Setup End to End Testing with Cypress

### Fixed

- SWC Error with line additions to .babelrc
