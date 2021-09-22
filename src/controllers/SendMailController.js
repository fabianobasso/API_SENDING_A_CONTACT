const SendMailNodeMailer = require('../Send/SendMail')

/**
 * Método para enviar e-mail, recebe requisição via post e faz o tratamento usando uma classe específica.
 * A resposta é uma promise que retorna um json.
 *
 * @param {*} req 
 * @param {*} res 
 */
exports.SendMail = (req, res) => {
    const mail = new SendMailNodeMailer(req.body)
    let reponseSendMail = mail.send()
    .then(resposta => {
        res.send(
            `${JSON.stringify({
                send: true,
                msg: 'Mensagem enviado com sucesso'
            })}`
        )
    }).catch(e =>{
        res.send(
            `${JSON.stringify({
                send: false,
                msg: 'Tente mais tarde novamente'
            })}`
        )
    })
}

/**
 * Informações do desenvolvedor
 * @param {*} req 
 * @param {*} res 
 */
exports.HomeMail = (req, res) => {
    res.send(
        {
            app: 'Api Send Mail - NodeMailer',
            author: 'Fabiano Basso',
            email: 'fabiano.basso.dev@gmail.com',
            version: '1.0'
        }
    )
}