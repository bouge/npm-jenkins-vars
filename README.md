# Jenkins Vars

Get Jenkins variables for gulp

# Example

``` js
var jenkinsVars = require('jenkins-vars')

jenkinsVars.gitBranch(function (str) {
  console.log('branch', str)
  // => /origin/develop
})

jenkinsVars.gitCommit(function (str) {
  console.log('commit', str)
  // => ce9a3c1404e8c91be604088670e93434c4253f03
})

jenkinsVars.buildNumber(function (str) {
  console.log('build', str)
  // => 1
})

jenkinsVars.jobName(function (str) {
  console.log('Job Name', str)
  // => Jenkins Job Name
})

```

# Methods

``` js 
var jenkinsVars = require('jenkins-vars')
```

## .buildNumber(function (build) { ... })
The current build number, such as "153"

## .jobName(function (name) { ... })
Name of the project of this build. This is the name you gave your job when you first set it up. It's the third column of the Jenkins Dashboard main page.

## .gitCommit(function (tag) { ... })
For Git-based projects, this variable contains the Git hash of the commit checked out for the build (like ce9a3c1404e8c91be604088670e93434c4253f03) ﻿(all the GIT_* variables require git plugin)

## .gitBranch(function (branch) { ... })
For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master) 

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
