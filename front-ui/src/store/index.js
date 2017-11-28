import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    sidebarIsCollapse: false
}

const mutations = {
    SET_SIDEBAR_IS_COLLAPSE: (state,isCollapse) => {
        state.sidebarIsCollapse = isCollapse
    }
}

const actions = {
    SetSidebarIsCollapseAction({ commit },isCollapse) {
        return new Promise(resolve => {
            commit('SET_SIDEBAR_IS_COLLAPSE',isCollapse)
            resolve()
        })
    }
}

const getters = {
    sidebarIsCollapse: state => state.sidebarIsCollapse
}

const store = new Vuex.Store({
    state,mutations,actions,getters
})

export default store