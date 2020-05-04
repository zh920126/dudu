export const state = () => ({
  userInfo: {
    token: '',
    user: {}
  }
})
// 同步方式用mutations
export const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  },
  clearUserInfo (state) {
    localStorage.removeItem('dudu_user')
    state.userInfo = {}
  }
}

// 异步方式用actions
export const actions = {

}
