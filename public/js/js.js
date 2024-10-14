const date = new Date();
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const currentDate = document.querySelector('.currentDate')
currentDate.innerHTML = `Novos pedidos foram efetuados desde o último acesso ao sistema.`