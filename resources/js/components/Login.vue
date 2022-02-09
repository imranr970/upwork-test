<template>
    <main class="login-page flex justify-center items-center h-screen">

      <div class="card rounded">
        
        <div class="p-8 text-left">
          
          <div class="mb-8">
            <h4 class="text-2xl font-bold">Login</h4>
            <p class="mt-2 text-dark-gray">Welcome back! Please login to your account.</p>
          </div>
            

          <form 
          action="#" 
          @submit.prevent="login">
            
            <div class="form-group pb-3">

              <input
              type="email" 
              name="email"
              placeholder="Please enter your email"
              class="block border-0 border-b-half w-full focus:outline-none border-light-green placeholder-gray-500"
              v-model="user.email"
              />

              <label 
              for="email" 
              class="text-xs text-gray-500"
              >
                Email
              </label>

            </div>

            <div class="form-group pb-3">

              <input 
                type="password"
                name="password"
                placeholder="password"
                class="block border-0 border-b-half w-full focus:outline-none border-light-green placeholder-gray-500"
                v-model="user.password"
              />

              <label 
              for="name" 
              class="text-xs text-gray-500"
              >
                Enter Password
              </label>
            
            </div>

          
            <div class="flex justify-between mt-10">
              <button 
              :disabled="loading"
              type="submit"
              class="bg-dark-green text-gray-200 p-1 px-10 text-center transition ease-in duration-100 hover:opacity-90"
              :class="{ 'cursor-not-allowed': loading }"
               >
                Login 
                
                <FontIcon icon="circle-notch" class="fa-spin" v-show="loading" />

              </button>

            </div>


          </form>

        </div>

      </div>

    </main>
</template>

<script>

import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup () {

        const store = useStore()
        const router = useRouter()

        const user = reactive({
            email: '',
            password: ''
        })
        const loading = computed(() => store.getters.loading)

        const login = async () => {
          await store.dispatch('login', { ...user })
          resetUser()
          router.replace({ name: 'dashboard' })
        }

        const resetUser = () => {
            user.email = ''
            user.password = ''
        }

        return {
            user,
            loading,
            login
        }
    }
}
</script>

<style lang="scss" scoped>

</style>