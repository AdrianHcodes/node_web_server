const {envs} = require('./config/env')
const {starServer} = require('./server/server')

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



