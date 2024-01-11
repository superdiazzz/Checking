import { Schema, MapSchema, type } from "@colyseus/schema";
import { getRandomColor } from '../../utils/utils'

export class Player extends Schema {

    @type("string") nickname: string;
    @type("number") skor: number = 0;
    @type("string") sessionId: string;
    @type("string") color: string;

    constructor(id: string, nickname: string=null){
        super()

        this.sessionId = id
        this.nickname = nickname
        this.color = getRandomColor()

    }
}