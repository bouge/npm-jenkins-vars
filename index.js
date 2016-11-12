var exec = require('child_process').exec

function _command(cmd, cb) {
    exec(cmd, function (err, stdout, stderr) {
        cb(stdout.split('\n').join(''))
    })
}

module.exports = {
    buildNumber: function (cb) {
        _command('echo ${BUILD_NUMBER}', cb)
    },
    jobName: function (cb) {
        _command('echo ${JOB_NAME}', cb)
    },
    gitBranch: function (cb) {
        _command('echo ${GIT_BRANCH}', cb)
    },
    gitURL: function (cb) {
        _command('echo ${GIT_URL}', cb)
    },
    gitCommit: function (cb) {
        _command('echo ${GIT_COMMIT}', cb)
    },
    buildID: function (cb) {
        _command('echo ${BUILD_ID}')
    },
    buildURL: function (cb) {
        _command('echo ${BUILD_URL}')
    },
    nodeName: function (cb) {
        _command('echo ${NODE_NAME}')
    },
    buildTag: function (cb) {
        _command('echo ${BUILD_TAG}')
    },
    jenkinsURL: function (cb) {
        _command('echo ${JENKINS_URL}')
    },
    executorNumber: function (cb) {
        _command('echo ${EXECUTOR_NUMBER}')
    },
    javaHome: function (cb) {
        _command('echo ${JAVA_HOME}')
    },
    workspace: function (cb) {
        _command('echo ${WORKSPACE}')
    },
    svnRevision: function (cb) {
        _command('echo ${SVN_REVISION}')
    },
    cvsBranch: function (cb) {
        _command('echo ${CVS_BRANCH}')
    }
}
