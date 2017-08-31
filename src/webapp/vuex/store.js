import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import Ydlibs from '../libs/ydlib.js'

const defaultState = {
    topics: [],
    count: 0
}

const inBrowser = typeof window !== 'undefined'
// if (!inBrowser) {
    Vue.use(Vuex)
// }
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
    TOPICS_LIST: (state, topics) => {
        state.topics = topics
    },

    INCREMENT: (state) => {
       state.count = Ydlibs.increment(state.count);
    },

    DECREMENT: (state) => {
       state.count = Ydlibs.decrement(state.count);
    }
}
export function createStore() {
    const store = new Vuex.Store({
        state,
        actions,
        mutations,
        getters
    });
    return store;
}
