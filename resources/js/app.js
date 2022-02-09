require('./bootstrap');

import { createApp } from 'vue'
import moment from 'moment'
import router from './router/router'
import store from './store/store'
import App from './components/App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faTrash, 
    faPen, 
    faTimes, 
    faSpinner,
    faCircleNotch 
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( 
    faTrash,
    faPen,
    faTimes,
    faSpinner,
    faCircleNotch
)

const app = createApp(App)
app.use(store)
app.config.globalProperties.$moment = moment
app.component('FontIcon', FontAwesomeIcon)

store.dispatch('attempt')
.then(() => {
    app.use(router)
    app.mount('#app')
})
.catch((e) => {
    app.use(router)
    app.mount('#app')
    throw e
})

