const messages = [
    'Orlando',
    'Adam',
    'Javi',
    'Pibe',
    'Renzo',
    'Caroline',
    'Chell',
    'Ellis',
    'Francis'
]
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = {randomMsg}