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