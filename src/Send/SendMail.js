/**
 * Classe para envio do email usando o NodeMailer.
 */
class SendMailNodeMailer {
    /**
     * Construtor da classe espera um objeto com nome, email e mensagem.
     * @param {object} obj 
     */
    constructor(obj) {
        this.name = obj.name
        this.email = obj.email
        this.msg = obj.msg
        this.nodeMailer = require('nodemailer') // Importa o nodemailer
    }

    /**
     * Método  para envio do email, primeiro define as configuração do email de envio e define
     * a mensagem para ser enviada.
     * 
     * @returns promises
     */
    async send() {
        let sender = this.setSender()
        let toSend = this.setToSend()

        let info = await sender.sendMail(toSend)

        return info
    }

    /**
     * Método para definir as configurações do email, retorna um objeto.
     * @returns object
     */
    setSender() {
        const sender = this.nodeMailer.createTransport({
            service: process.env.SERVICE,
            host: process.env.HOST_EMAIL,
            port: process.env.PORT,
            secure: process.env.SECURE,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASS_EMAIL
            }
        })

        return sender
    }

    /**
     * Método para definir um objeto com a mensagem a ser enviada.
     * @returns object
     */
    setToSend() {
        return (
            {
                from: process.env.USER_EMAIL,
                to: process.env.TO_SEND,
                subject: "Enviado pagina do github",
                html: `<p><strong>Nome:</strong> ${this.name}</p>` +
                    `<p><strong>Email:</strong> ${this.email}</p> ` +
                    `<p><strong>Mensagem:</strong> </p><p>${this.msg}</p>`
            }
        )
    }
}

module.exports = SendMailNodeMailer

