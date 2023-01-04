# API_with_GitHub_Actions
![Badge in Development](http://img.shields.io/static/v1?label=STATUS&message=%20DONE&color=GREEN&style=for-the-badge)

Our api with with github actions__

![api](https://user-images.githubusercontent.com/33332202/174480260-f97d8667-463a-4041-862f-0fd2fadbfb95.jpg)

### What are GitHub Actions?
GitHub Actions are workflows, better known in the area of software projects as pipelines, which allow the use of a set of actions when certain events are identified in the repository. A repository event can be as simple as "when a push is made to the master branch" or "A pull request is raised on the master branch". GitHub Actions allow us to automate certain responses to these events using automated workflows called GitHub Actions. These actions react to one or several events and perform certain tasks, for example. "Build and run the tests", "Deploy the code", "Merge the code from one branch to another".

We can build our end-to-end continuous integration (CI) and deployment (CD) to the code in the repository directly on GitHub.
Configuring GitHub Actions

### 1 - Adding an ACTION
Github Actions are defined in a file in yaml format (YAML is a human-readable data serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted) and are located in the folder from GitHub > .github/workflows
 
### 2 - To start, create the repository with our files exported from the Collection and Environment, and then click on Actions:
 
### 3 - Next, click on simple flow, on the configure option:
 
### 4- Creating the Workflow file (Workflow)
We start by adding the trigger on which our GitHub Action workflow will run. This is done in the yaml file as shown below. The lines of code below define the name of the workflow and what it will execute when a push event occurs on the repository's main/main branch.
 
### 5 - Now we create the job that will actually run the POSTMAN collection.
 
Now we start defining the individual steps that will be performed within the job.
Installing Node and Newman in workflow file - Wokflow GitHub Action
Postman can be run inside CI/CD agents using the command prompt utility called newman. To install newman, we first need to install node.js on runner. It is done as shown below.
Note: newman-reporter-htmlextra installs a custom reporter that will generate visually appealing reports for us.
 
### 6- Directory for test results
As a custom process in CI/CD, we need a workspace to upload the artifacts generated during execution, these artifacts could be agent generated logs, custom logs written in steps, test results, etc. GitHub Actions provides a way to upload work files to the workspace. The trick is to create a directory and send the results to it. The directory can be created using the following step.
 

### 7- Configuring the execution of the Postman collection in Wokflow from GitHub Actions
Our next task is to run the tests defined in the Postman collection. The Postman collection file (.json) is available in the repository as shown below.
The NEXT step runs the Postman collection and creates the html report as a result of running the test.
 
### 8 - Uploading artifacts (reports, collections and environments)
As a last step we upload the artifacts to the workspace, this can be done using actions/upload-artifact@v2 as shown below. We're loading all the contents of the testResults directory we created earlier.
 

## The Test itself
When a push is made to the main/main repository, the workflow is triggered. The output of each build is available in the Repository Actions panel and we can drill down into each flow to see why it failed.
 
`By clicking on the execution (Update postman-pull-request.yml) we see the details AND SOON BELOW WE CAN SEE THE LINK OF THE REPORT IN ZIP FORMAT, CONTAINING THE HTML REPORT OF THE EXECUTION`
 

 

