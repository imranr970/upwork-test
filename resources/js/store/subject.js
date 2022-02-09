import { LOADING, SET_SUBJECTS } from './mutation_types'
export default {
    namespaced: true,
    state: {
        loading: false,
        subjects: []
    },
    getters: {
        loading: (state)  => state.loading,
        subjects: (state) => state.subjects
    },
    mutations: {
        [LOADING](state, loading) {
            state.loading = loading
        },
        [SET_SUBJECTS](state, subjects) {
            state.subjects = subjects
        }
    },
    actions: {
        async getSubjects({ commit }) {
            try {
                commit(LOADING, true)
                const { data } = await axios.post('subjects')
                commit(SET_SUBJECTS, data)
            }
            catch(e) {
                throw e
            }
            finally {
                commit(LOADING, false)
            }
        }
    }
}