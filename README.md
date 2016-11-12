# Jenkins Vars

Get Jenkins variables for gulp

# Example

``` js
var jenkinsVars = require('../')

jenkinsVars.gitBranch(function (str) {
    console.log('short', str)
    // => /origin/develop
})

jenkinsVars.gitCommit(function (str) {
    console.log('long', str)
    // => aefdd946ea65c88f8aa003e46474d57ed5b291d1
})

jenkinsVars.buildNumber(function (str) {
    console.log('long', str)
    // => 1
})

jenkinsVars.jobName(function (str) {
    console.log('Job Name', str)
    // => Jenkins Job Name
})

jenkinsVars.gitURL(function (str) {
    console.log('Build Url', str)
    // =>  git@github.com:user/repo.git
})

jenkinsVars.buildID(function (str) {
    console.log('Build ID', str)
    // => YYYY-MM-DD_hh-mm-ss
})

jenkinsVars.buildURL(function (str) {
    console.log('Build URL', str)
    // => http://buildserver/jenkins/job/MyJobName/666/
})

jenkinsVars.nodeName(function (str) {
    console.log('Jenkins Node Name', str)
    // => Master
})

jenkinsVars.buildTag(function (str) {
    console.log('Build Tag', str)
    // => jenkins-${JOB_NAME}-${BUILD_NUMBER}
})

jenkinsVars.jenkinsURL(function (str) {
    console.log('Jenkins URL', str)
    // => http://buildserver/
})

jenkinsVars.executorNumber(function (str) {
    console.log('Executor Number', str)
    // => 0
})

jenkinsVars.javaHome(function (str) {
    console.log('JAVA Home', str)
    // => path to java
})

jenkinsVars.workspace(function (str) {
    console.log('Workspace', str)
    // => Absolute path of workspace
})

jenkinsVars.svnRevision(function (str) {
    console.log('SVN Revision', str)
    // =>  Revision number of the module
})

jenkinsVars.cvsBranch(function (str) {
    console.log('CVS Branch', str)
    // => Trunk
})

```

# Methods

``` js 
var jenkinsVars = require('jenkins-vars')
```

## .gitBranch(function (branch) { ... })
For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master) 

## .gitCommit(function (tag) { ... })
For Git-based projects, this variable contains the Git hash of the commit checked out for the build (like ce9a3c1404e8c91be604088670e93434c4253f03) ﻿(all the GIT_* variables require git plugin)

## .buildNumber(function (build) { ... })
The current build number, such as "153"

## .jobName(function (name) { ... })
Name of the project of this build. This is the name you gave your job when you first set it up. It's the third column of the Jenkins Dashboard main page.

## .gitURL(function (branch) { ... })
For Git-based projects, this variable contains the Git url (like git@github.com:user/repo.git or [https://github.com/user/repo.git]) 

## .buildID(function (branch) { ... })
The current build id, such as "2005-08-22_23-59-59" (YYYY-MM-DD_hh-mm-ss, defunct since version 1.597) 

## .buildID(function (branch) { ... })
The URL where the results of this build can be found (e.g. http://buildserver/jenkins/job/MyJobName/666/)

## .nodeName(function (branch) { ... })
The name of the node the current build is running on. Equals 'master' for master node. 

## .buildTag(function (branch) { ... })
String of jenkins-${JOB_NAME}-${BUILD_NUMBER}. Convenient to put into a resource file, a jar file, etc for easier identification.

## .jenkinsURL(function (branch) { ... })
Set to the URL of the Jenkins master that's running the build. This value is used by Jenkins CLI for example

## .executorNumber(function (branch) { ... })
The unique number that identifies the current executor (among executors of the same machine) that's carrying out this build. This is the number you see in the "build executor status", except that the number starts from 0, not 1.

## .javaHome(function (branch) { ... })
If your job is configured to use a specific JDK, this variable is set to the JAVA_HOME of the specified JDK. When this variable is set, PATH is also updated to have $JAVA_HOME/bin.

## .workspace(function (branch) { ... })
The absolute path of the jenkins workspace.

## .svnRevision(function (branch) { ... })
For Subversion-based projects, this variable contains the revision number of the module. If you have more than one module specified, this won't be set. 

## .cvsBranch(function (branch) { ... })
For CVS-based projects, this variable contains the branch of the module. If CVS is configured to check out the trunk, this environment variable will not be set.


# Install

`npm install jenkins-vars`

# License

(The MIT License)

Copyright (c) 2016 Louis Bougeard <louis@bougeard.co.uk>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
