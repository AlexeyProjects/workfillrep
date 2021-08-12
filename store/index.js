import axios from 'axios'

export const state = {
	datamain: []
}

export const mutations = {
  	PUT_DATAMAIN_DATA(state,data) {
      state.datamain = data
    },
}

export const actions = {
  	GET_DATAMAIN_DATA({ commit }) {
        axios.get('data.json')
            .then(response => {
                commit('PUT_DATAMAIN_DATA', response.data)
            })
    }
}

export const getters = {
  	DATAMAIN: function(state) {
      return state.datamain
    },
}