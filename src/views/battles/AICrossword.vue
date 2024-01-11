<template>
    <div v-if="!isPlay">
        <AICWaitingRoom @onnickname="handleNickname" @onquit="handleQuit"/>
    </div>
    <div v-else class="mt-16">
        GAME DISINI
        <p>Hitungan Mundur {{ count }}</p>
        <button @click="test" class="button">Count down</button>
    </div>
</template>
<script setup>
import { ref, defineAsyncComponent, provide } from 'vue'

// init server game
import * as Colyseus from 'colyseus.js'

const isPlay = ref(false)

const client = ref(null)
let gameRoom = null

client.value = new Colyseus.Client('ws://localhost:2570')
console.log('client ', client.value);

provide('client', client)


const AICWaitingRoom = defineAsyncComponent(() => import('../../components/aicrossword/AICWaitingRoom.vue'))

const count = ref(null)



const handleNickname = async(nickname)=> {

    try {
        gameRoom = await client.value.joinOrCreate('12345', { nickname })
        console.log('berhasil join room ', gameRoom);

        // Handle state updates
        gameRoom.onStateChange(changes => {
            console.log('Room state changed:', changes);
        });

        isPlay.value = true

    } catch (error) {
        console.log('error join ', error);
    }

}

const test = async() => {

    if(!gameRoom){
        console.log('no room');
        return
    }

    await gameRoom.send('decrement', {number: 1})
    
}

const handleQuit = () => {

}




</script>
<style lang="">
    
</style>