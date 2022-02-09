<template>
    <div class="p-5">
        <h4 class="mb-2">Welcome {{ user.name }}</h4> 
        <button 
        class="bg-dark-green text-white hover:opacity-90 p-2 px-5 text-sm"
        @click.prevent="logout"
        >
        Logout
        </button>

        <h4 class="my-2">Your Subjects</h4>

        <table class="table-auto border border-collapse border-gray-500 p-2">
            <thead>
                <tr class="border border-gray-500">
                    <td>Subject</td>
                    <td>Created on</td>
                </tr>
            </thead>
            <template v-if="loading">
                <FontIcon icon="circle-notch" class="fa-spin" />
            </template>
            <template v-else>
                <tbody v-if="subjects.length">
                    <tr 
                    class="border border-gray-500"
                    v-for="subject in subjects" :key="subject.id">
                        <td>{{ subject.name }}</td>
                        <td>{{ $moment(subject.created_at).format('LL') }}</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td>No Subjects Found for this user</td>
                    </tr>
                </tbody>
            </template>
            
        </table>

    </div>
</template>

<script>

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup () {
        
        
        const store = useStore()
        const router = useRouter()
        const user = computed(() => store.getters.user)
        const subjects = computed(() => store.getters['subject/subjects'])
        const loading = computed(() => store.getters['subject/loading'])


        const logout = async () => {
            await store.dispatch('logout')
            router.replace({ name: 'login' })
        }

        onMounted(() => {
            store.dispatch('subject/getSubjects')   
        })

        return {
            user,
            logout,
            subjects,
            loading
        }
    }
}
</script>

<style scoped>
    td {
        border-right: 1px solid rgba(107, 114, 128, 1);
        padding: .4rem .7rem;  
    }
</style>