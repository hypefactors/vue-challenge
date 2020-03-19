import users from './users'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

const userResponse = [{
  id: 1,
  name: 'User'
}, {
  id: 2,
  name: 'User 2'
}]

let store
const localVue = createLocalVue()
localVue.use(Vuex)

describe('users', () => {
  beforeEach(() => {
    store = new Vuex.Store(users)
  })
  it('should save the last time something was fetched', async () => {
    expect(store.state.users).toHaveLength(0)
    await store.dispatch('fetchUsers', 1000)
    expect(store.state.users).toEqual(userResponse)
    expect(store.state.fetchedAt).toEqual(1000)
  })

  it('should not fetch users 2 times', async () => {
    expect(store.state.users).toHaveLength(0)
    await store.dispatch('fetchUsers', Date.now())
    await store.dispatch('fetchUsers', Date.now())
  })

  it('should delete a user', () => {

  })

  // ...more tests
})
