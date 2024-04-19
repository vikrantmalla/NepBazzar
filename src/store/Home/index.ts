import { state } from './home-state'
import { actions } from './home-actions'
import { getters } from './home-getters'
import { mutations } from './home-mutations'

const home = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export default home
