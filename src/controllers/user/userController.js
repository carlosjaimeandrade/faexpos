import create from '../../services/user/createUser.js'
import login from '../../services/user/auth.js'

const createUser = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        res.json({
            message: "os campos name, email e password é obrigatorio"
        })
        return
    }

    const user = await create(req.body)

    res.status(201)
    res.json({
        token: user.token
    })
}

const auth = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        res.json({
            message: "email e senha obrigatorio"
        })
        return
    }

    const user = await login(email, password)

    if (!user) {
        res.status(401)
        res.json({
            message: "email ou senha invalidos"
        })
        return
    }

    res.json({
        message: "login realizado com sucesso",
        token: user.token
    })
}

export default {
    createUser,
    auth
}