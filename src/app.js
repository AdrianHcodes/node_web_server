//const {envs} = require('./config/env')
import {envs} from './config/env.js'
//const {starServer} = require('./server/server')
import {starServer} from './server/server.js'

const main = () => {
    starServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica autoconvocada
//agnostica por que no tiene nombre y autoconvocada poruqe la ejecutamos con la parentessis
(async () => {
    main()
})()



