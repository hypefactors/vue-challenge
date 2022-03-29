import { createLocalVue, mount } from '@vue/test-utils'
import Home from './Home'
import users from '../store/modules/users'
import Vuex from 'vuex'

let store
const localVue = createLocalVue()
localVue.use(Vuex)

function createWrapper () {
  return mount(Home, { localVue, store })
}

describe('components', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        users: users
      }
    })
  })

  // it('should fetch users', () => {
  //   const wrapper = createWrapper()

  //   expect(wrapper.findAll('.UsersListItem')).toHaveLength(0)
  //   wrapper.find('.mdl-button').trigger('click')
  //   // what next?
  // })

  // it('should only fetch once', () => {
  //   const wrapper = createWrapper()

  //   expect(wrapper.findAll('.UsersListItem')).toHaveLength(0)
  //   wrapper.find('.mdl-button').trigger('click')
  //   // what next?
  // })

  it('other?', () => {

  })
})
