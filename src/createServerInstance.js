import Server from './server/Server'

let instance = null;
// no longer used
const createServerInstance = () => {
    if(!instance){
        instance = new Server()
    }
    return instance
}

export default createServerInstance