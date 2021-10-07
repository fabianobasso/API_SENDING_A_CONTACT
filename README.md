
# API SENDING A CONTACT

**Project license**   
[![GitHub](https://img.shields.io/github/license/fabianobasso/Jogo_De_Xadrez)](https://github.com/fabianobasso/api_send_email/blob/master/LICENSE) 

## Description
Api developed for sending email, with html support sends to api the data of a form with message, email for contact and name.

---

## Settings
- Create a file named .env in the project's root folder

<br>

- Edit the env file you just created:
```env
HOST_EMAIL='' # Your smtp service
SERVICE='' # Email service exempla(gmail)
PORT= # Email sending port
SECURE= # If the port is 465 put true for any other put false
USER_EMAIL='' # user email
PASS_EMAIL='' # pass email
TO_SEND='' # Only configure if it is to send to a specific email always

```

<br>

- Install project dependencies:
```bash
npm i
```

<br>

- Run the api:
```bash
npm run start
```

<br>

- Test the api, use postman or Thunder Client(vsCode)
```php
# send a request to
http://localhost:8081/send_contact

# with the data of a form
key = name      value = any name
key = email     value = any email
key = message   value = any text

# Expected response a json with true or false and a success or error message
{
    send: true
    msg: Sent with success
}

# or error message
{
    send: false
    msg: Try again later
}
```

- If the send message returns false to consult the log **/logs/send_error_log.txt**

---

## Author

**Fabiano Basso Antonio**

I also work as a **FULL STACK DEVELOPER** freelancer, if you have a project, this is the right time to get it off the ground, we can talk, and I'll present the best solution for you.


## My contacts:
**Portfólio:** https://fabianobasso.github.io/

**Linkedin:** https://www.linkedin.com/in/fabiano-basso

**Whatsapp:** [Send Message](https://api.whatsapp.com/send?phone=5519999979098)
