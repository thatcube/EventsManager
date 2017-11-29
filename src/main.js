import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditEventDetailsDialog from './components/Event/Edit/EditEventDetailsDialog.vue'
import EditEventDateDialog from './components/Event/Edit/EditEventDateDialog.vue'
import EditEventTimeDialog from './components/Event/Edit/EditEventTimeDialog.vue'
import RegisterDialog from './components/Event/Registration/RegisterDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-event-details-dialog', EditEventDetailsDialog)
Vue.component('app-edit-event-date-dialog', EditEventDateDialog)
Vue.component('app-edit-event-time-dialog', EditEventTimeDialog)
Vue.component('app-event-register-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD6jKzUDr6-omGOukemP6Z-8fa1jgTvvAE',
      authDomain: 'vue-event.firebaseapp.com',
      databaseURL: 'https://vue-event.firebaseio.com',
      projectId: 'vue-event',
      storageBucket: 'vue-event.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadEvents')
  }
})
