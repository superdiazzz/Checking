import * as Colyseus from 'colyseus.js'

export default class Server{

    client = null
    room = null

    constructor(){

        this.client = new Colyseus.Client('ws://localhost:2568')
        console.log(this.client);

    }

    async joinById(id){
        return await this.client.joinOrCreate(id).then(room => {
            console.log('Join private room berhasil ', room);
            this.room = room


            // this.room.onMessage('playerNicknameUpdated', (message) => {

            // })

            this.room.onStateChange.once(state => {
                console.log('initial room state: ', state);
            })

            this.room.onStateChange(changes => {

                console.log('isi changes ', changes);


                const players = Array.from(changes.players)
                if(players){
                    console.log('players ', players);
                }

                const timer = changes.timer
                if(timer){
                    console.log('timer saat ini ', timer);
                }

            })

            this.room.state.players.onAdd((player, sessionId) => {
                console.log('pemain ditambah ', player, 'sesionId', sessionId);
                
                    // add your player entity to the game world!
                // player.listen('nickname', (value, prevValue) => {
                //     console.log(value);
                //     console.log(prevValue);
                // })
            })

            this.room.state.players.onChange((value, key) => {
                console.log(key, 'change to ', value);
            })

            // this.room.state.timer.onChange((value, key) => {
            //     console.log(key, 'change to timer ', value);

            // })

            return true

        }).catch(err => {
            console.error('Gagal join private room ', err);
            console.log('error ', err.message);

            return false
        })
    }

    async setNickname(nickname){

        if(!this.room){
            console.log('room kosong!');
            return
        }
        try {
            await this.room.send('updateNickname', { nickname: nickname })
        } catch (error) {
            console.log('err ', error);
        }
    }

    async testTrigger(){
        if(!this.room){
            console.log('room kosong!');
            return
        }

        try {
            await this.room.send('decrement', { number: 1 })
        } catch (error) {
            console.log('err ', error);
        }
    }
}