This project was bootstrapped with Create React App and for Code Coverage
SonarQube Initialized.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

For Test Coverage use the below command and add it in sonar-project.properties
After excuting a test coverage folder will be auto generated.

### `npm test -- --coverage`

[Installing Sonarqube and Sonar-scanner in Mac](http://www.managerjs.com/blog/2015/11/install-sonar-locally-on-osx-and-analyze-a-javascript-project/)

NOTE: A correction from above installation process, instead of `brew install sona-runner` install `brew install sonar-scanner`

---

After installing Sonarqube and sonar-scanner
Go to sonar installation path which you can get from `brew info sonar`
start sonar server by `sonar start`

Setting Sonar Scanner

Create a file `sonar-project.properties` in root folder and add below settings in it.

`

# required metdata

sonar.projectKey=<Any Key Name>
sonar.projectVersion=1.0.0
sonar.sourceEncoding=UTF-8

# path to srouce directories

sonar.sources=<Source Code Folder Name>
sonar.tests=coverage/coverage-final.json

# excludes

sonar.javascript.exclusion=node-modules/_,coverage/lcov-report/_
sonar.javascript.lcov.reportPaths=sonar-reports/lcov.info

# Language

#sonar.language=js
`

At the end run sonar-scanner -X from terminal . Make sure your in root folder.

Thanks Happy Coding.
Uttam
