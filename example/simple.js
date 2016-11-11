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
