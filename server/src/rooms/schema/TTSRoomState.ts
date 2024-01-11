import { Schema, ArraySchema, MapSchema, type } from "@colyseus/schema";
import { Player } from "./Player";


export class TTSRoomState extends Schema {
    
    @type("string") title: string = "Belum ada nama";
    @type({ map: Player} ) players = new MapSchema<Player>();
    @type("boolean") start: boolean;
    @type("number") timer: number;

    constructor(){
        super();

        this.timer = 300;
        this.start = false;
    }
}