<template>
    <!-- KOMPONEN INI HANDLING FASE INPUT NICKNAME & WAITING ROOM -->
    <div class="hero is-large">
        <div class="hero-body">
            <form @submit.prevent="next" class="container">
                <h3 class="title">Siap bermain AI CROSSWORD?</h3>
                <div class="columns is-centered">
                    <div class="column is-one-third">
                    <p class="subtitle">Game Host membutuhkan "Nickname"</p>
                    <input v-model.trim="nickname" class="input is-rounded" :class="nicknameError === true ? 'is-danger' : ''" type="text" placeholder="Your Nickname">
                    </div>
                </div>
                
                <div class="buttons has-addons is-centered">
                    <button v-if="pending" class="button is-loading is-success"></button>
                    <button v-else class="button is-success">Lanjut</button>
                    <button @click.stop="remove" class="button">Keluar</button>
                </div>  
            </form>
        </div>
        </div>
</template>
<script setup>
import { ref, defineEmits, inject } from 'vue'

const  pending = ref(false)

const nicknameError= ref('')
const nickname = ref('')

const emit = defineEmits(['onnickname', 'onquit'])


const next = async() => {
    if(nickname.value){
        emit('onnickname', nickname.value)
    }
}

const remove = () => {
    emit('onquit')
}


</script>
<style lang="">
    
</style>