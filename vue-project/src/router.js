import { createRouter, createWebHistory } from "vue-router";
import Login from './views/LogIn.vue'
import ForGet from './views/ForGet.vue'
import DashBoard from './views/DashBoard.vue'
import MailPost from './views/MailPost.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: ForGet},
    { path: '/dashboard', component: DashBoard},
    { path: '/mail/:id?', component: MailPost},
  ]
})
