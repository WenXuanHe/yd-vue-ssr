import request from 'axios'

request.defaults.baseURL = 'http://localhost:8081/'

export const getTopics = ({ commit, state }) => {
  return request.get('index/getdata').then((response) => {
    if (response.statusText === 'OK') {
      commit('TOPICS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
