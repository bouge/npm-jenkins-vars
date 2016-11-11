var exec = require('child_process').exec

function _command (cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    cb(stdout.split('\n').join(''))
  })
}

module.exports = {
    buildNumber : function (cb) {
        _command('echo ${BUILD_NUMBER}', cb)
    },
    jobName : function (cb) {
        _command('echo ${JOB_NAME}', cb)
    },
    gitBranch : function (cb) {
        _command('echo ${GIT_BRANCH}', cb)
    },
    gitCommit : function (cb) {
        _command('echo ${GIT_COMMIT}', cb)
    }
}
