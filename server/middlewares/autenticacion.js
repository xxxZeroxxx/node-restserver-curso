const jwt = require('jsonwebtoken');

// ========================
// Verificar token
// ========================

//next continua con la ejecución del programa

let verificaToken = (req, res, next) => {


    // Si no se llama la funcion del next, jamas se va a ejecutar
    // todo lo que siga despues del verificaToken

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();
    })

};

// ========================
// Verificar AdminRole
// ========================

//next continua con la ejecución del programa

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {

        next();

    } else {

        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })

    }

};

module.exports = {
    verificaToken,
    verificaAdminRole
}