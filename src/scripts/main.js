const dataDoEvento = new Date("Feb 18, 2027 00:00:00");//data do evento
const timeStampDoEvento = dataDoEvento.getTime();//atualizado do tempo do evento para milissegundos

//função para atualizar a contagem regressiva
const contaAsHoras  = setInterval(function() {
    const agora = new Date();//data atual
    const timeStampAtual = agora.getTime();//atualizado do tempo atual para milissegundos

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;//calcula a distância entre o evento e o tempo atual

    const diaEmMS = 1000 * 60 * 60 * 24;//quantidade de milissegundos em um dia
    const horaEmMS = 1000 * 60 * 60;//quantidade de milissegundos em uma hora
    const minutoEmMS = 1000 * 60;//quantidade de milissegundos em um minuto
    const segundoEmMS = 1000;//quantidade de milissegundos em um segundo

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);//calcula os dias restantes
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / (horaEmMS));//calcula as horas restantes
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / (minutoEmMS));//calcula os minutos restantes
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / (segundoEmMS));//calcula os segundos restantes

    //para colocar no HTML
    document.getElementById("dias").innerHTML = diasAteOEvento;//atualiza o elemento com id "dias" com o valor calculado
    document.getElementById("horas").innerHTML = horasAteOEvento;//atualiza o elemento com id "horas" com o valor calculado
    document.getElementById("minutos").innerHTML = minutosAteOEvento;//atualiza o elemento com id "minutos" com o valor calculado
    document.getElementById("segundos").innerHTML = segundosAteOEvento;//atualiza o elemento com id "segundos" com o valor calculado

}, 1000);//atualiza a cada segundo