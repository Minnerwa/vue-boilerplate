import '~/css'
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '~/routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })
const app = new Vue({ router })
app.$mount('#app')
