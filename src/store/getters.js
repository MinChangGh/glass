const getters = {
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    errorLogs: state => state.errorLog.logs,
    cachedViews: state => state.cache.cachedViews,
}
export default getters