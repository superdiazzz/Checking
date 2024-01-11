import { Command } from '@colyseus/command'
import { TTSRoom } from '../../rooms/TTSRoom';


export default class NicknameCommand extends Command<TTSRoom>{
    
    execute(data: any){

        const { client, nickname } = data

        const player = this.state.players.get(client.sessionId)

        console.log('nickname ', nickname);
        

        if (player) { // Replace with your validation logic
                this.state.players.set(client.sessionId, Object.assign(player, { nickname: nickname }))

            //player.nickname = data.nickname;
            // this.broadcast('playerNicknameUpdated', { playerId: client.sessionId, nickname: data.nickname });
        } else {
            // Handle invalid nickname or errors
        }

    }
}