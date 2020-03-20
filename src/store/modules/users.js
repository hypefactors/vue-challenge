import axios from 'axios'

const state = {
  users: [],
  fetchedAt: null,
  isDeleting: false
}

const getters = {
  users: state => state.users,
  isDeleting: state => state.isDeleting
}

const mutations = {
  SET_USERS (state, users) {
    state.users = users
  },
  SET_LAST_FETCHED (state, fetchedAt) {
    state.fetchedAt = fetchedAt
  }
}

const actions = {
  fetchUsers ({ state, commit }, fetchAt) {
    if (state.users.length) return
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        commit('SET_USERS', data)
        commit('SET_LAST_FETCHED', fetchAt)
      })
  },

  deleteUser ({ state, commit }, user) {
    // How would you remove a user?
    // make call to api
    // update local data
    console.log('user deleted')
  },

  updateUser () {
    // make call to api
    // update local user data
    console.log('user updated')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
