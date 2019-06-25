import { loginByUsername, getUserInfo } from '@/api/login'
import { editUserInfo } from '@/api/user'
import { logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    userInfo: {
      uid: 101,
      avatar: "http://thirdwx.qlogo.cn/mmopen/TAurpzzE1aYKJ3rlNhlbIDPKCpQic3IjXA5TFYXLg1Iq0iaX2pMYFVdXy53Um46iaronDMnRsA5Udlu30D9XDRMWzGNwiaQhQgGic/132",
      name: 'peng',
      member: '微会员',
      sex: '男',
      birthday: "1987-01-08",
      phone: "18658318156",
      email: "82912094@qq.com",
      zone: ["320000", "320100"],
      joinTime: "2018-11-02",
      erpScore: 150,
    }

  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_USER_NAME: (state, name) => {
      state.userInfo.name = name
    },
    SET_USER_MEMBER: (state, member) => {
      state.userInfo.member = member
    },
    SET_USER_SEX: (state, sex) => {
      state.userInfo.sex = sex
    },
    SET_USER_BIRTHDAY: (state, birthday) => {
      state.userInfo.birthday = birthday
    },
    SET_USER_PHONE: (state, phone) => {
      state.userInfo.phone = phone
    },
    SET_USER_EMAIL: (state, email) => {
      state.userInfo.phone = email
    },
    SET_USER_ZONE: (state, zone) => {
      state.userInfo.zone = zone
    },
    SET_USER_ERP_SCORE: (state, erpScore) => {
      state.userInfo.erpScore = erpScore
    },
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.account.trim()
      const password = userInfo.phone.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          commit('SET_USERINFO', data.userInfo)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USERINFO', data.userInfo)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    //更改用户名
    SetUserName({ commit, state }, name) {
      return new Promise((resolve, reject) => {
        editUserInfo({ name: name }).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USER_NAME', data.userInfo.name)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //更改性别
    SetUserSex({ commit, state }, sex) {
      return new Promise((resolve, reject) => {
        editUserInfo({ sex: sex }).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USER_SEX', data.userInfo.sex)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //更改生日
    SetUserBirthday({ commit, state }, birthday) {
      console.log(birthday)
      return new Promise((resolve, reject) => {
        editUserInfo({ birthday: birthday }).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USER_BIRTHDAY', data.userInfo.birthday)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //更改手机
    SetUserPhone({ commit, state }, phone) {
      return new Promise((resolve, reject) => {
        editUserInfo({ phone: phone }).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USER_PHONE', data.userInfo.phone)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //更改email
    SetUserEmail({ commit, state }, email) {
      return new Promise((resolve, reject) => {
        editUserInfo({ email: email }).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USER_EMAIL', data.userInfo.email)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //更改地区
    SetUserZone({ commit, state }, zone) {
      return new Promise((resolve, reject) => {
        editUserInfo({ zone: zone }).then(response => {
          if (response.code === 1) {
            reject('error')
          }
          const data = response.data.data
          commit('SET_USER_ZONE', data.userInfo.zone)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //更改ERP积分
    SetUserERPScore({ commit, state }, erpScore) {
      commit('SET_USER_ERP_SCORE', erpScore)
    },
  }
}

export default user
