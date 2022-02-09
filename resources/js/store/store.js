
import Vuex from 'vuex'
import subject from './subject'
import { LOADING, SET_USER } from './mutation_types'

export default Vuex.createStore({
    
    modules: {
        subject
    },
    
    state: {
        loading: false,
        loggedIn: false,
        user: {},
    },

    getters: {
        loading: (state) => state.loading,
        user: (state) => state.user,
        loggedIn: (state) => state.loggedIn,
    },

    mutations: {
        [LOADING](state, loading) {
            state.loading = loading
        },
        [SET_USER](state, { user, loggedIn }) {
            state.user = user
            state.loggedIn = loggedIn
        }
    },

    actions: {
        
        async login({ commit, dispatch }, user) {
            try {
                commit(LOADING, true)
                await axios.post('login', {
                    email: user.email,
                    password: user.password
                })
                dispatch('attempt')
            } 
            catch(e) {
                throw e
            }
            finally {
                commit(LOADING, false)
            }
        },

        async attempt({ commit, dispatch }) {
            try {
              const { data } = await axios.post('me')
              if(Object.entries(data).length) {
                  commit(SET_USER, { user: data, loggedIn: true })
                  return Promise.resolve()
              }
              dispatch('resetAuth')
            }
            catch(e) {
              throw e
              dispatch('resetAuth')
            }
        },

        async logout({ dispatch }) {
            await axios.delete('logout')
            dispatch('resetAuth')
        },

        resetAuth({ commit }) {
            commit(SET_USER, { user: {}, loggedIn: false })
        }

    }

})