import { Room, Client, ClientArray } from "@colyseus/core";
import { TTSRoomState } from "./schema/TTSRoomState";
import { Player } from "./schema/Player";
import { Dispatcher } from "@colyseus/command"
import NicknameCommand from "../commands/tts/NicknameCommand";


export class TTSRoom extends Room<TTSRoomState> {

    private dispatcher = new Dispatcher(this)

    onCreate(options: any){
        this.setState(new TTSRoomState())
        console.log('create called', options.roomId);

        const t = options.timer
        const title = options.title
        const ownerId = options.ownerId

        this.state.timer = t
        this.state.title = title

        if(options.roomId === undefined){
            console.log('user di disconnect!');
            
            this.disconnect()
        }

        this.onMessage('updateNickname', (client, message) => {
            this.dispatcher.dispatch(new NicknameCommand(), { client, nickname: message.nickname})
            // this.onUpdateNickname(client, message)
        })

        // for test only
        this.onMessage('decrement', (client, message)=> {
            this.state.timer -= message.number
            this.state.players = this.state.players.clone()
        })
 
    }
    

    onJoin(client: Client, options: { nickname: string }){
        console.log(client.sessionId, "joined! ", options);
        this.state.players.set(client.sessionId, new Player(client.sessionId, options.nickname))
    }
    

    onLeave(client: Client){
        console.log(client.sessionId, "left!");
        if(this.state.players.has(client.sessionId)){
            this.state.players.delete(client.sessionId)
        }
    }

    onDispose(){
        console.log("room", this.roomId, "disposing...");
    }

    //  COMMANDS
    // onUpdateNickname(client: Client, data: { nickname: string }) {
    //     // Handle nickname update logic
    //     console.log('update nickname ', data.nickname);

    //     let player = this.state.players.get(client.sessionId)
    //     //&& validateNickname(data.nickname)
    //     if (player) { // Replace with your validation logic
    //         player.nickname = data.nickname;
    //         this.broadcast('playerNicknameUpdated', { playerId: client.sessionId, nickname: data.nickname });
    //     } else {
    //         // Handle invalid nickname or errors
    //     }
    // }

}