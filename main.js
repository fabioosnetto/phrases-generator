const phrases = [
   `O mundo pertence aos otimistas: os pessimistas são meros espectadores.`,
   `Enquanto houver vontade de lutar, haverá esperança de vencer. Imagine uma nova história para sua vida e acredite nela.`,
   `É pecado não ter esperança.`,
   `Quanto mais nos elevamos, menores parecemos aos olhos daqueles que não sabem voar.`,
   `Um dia ruim não desfaz uma vida boa. Não desista!`,
   `Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.`,
   `Otimismo é a arte de enxergar borboletas onde todos só vêem lagartas.`,
   `O pessimismo nunca venceu nenhuma batalha.`,
   `Tudo tem começo e meio. O fim só existe para quem não percebe o recomeço.`,
   `Receita da vida feliz: Algo para fazer, alguém para amar e esperança no futuro.`,
   `Viver é a arte de não desistir! Por isso, coragem! Enquanto houver vida, haverá esperança!
   Há muito amor e esperança no mundo. Escolha olhar para eles!`,
   `Quer você acredite que consiga fazer uma coisa ou não, você está certo`,
   `Jamais se desespere em meio às sombrias aflições de sua vida, pois das nuvens mais negras cai água límpida e fecunda.`,
   `De que me adianta temer o que já aconteceu? O tempo do medo já aconteceu, agora, começa o tempo da esperança.`,
   `O que passou, passou, e o caminho adiante é você que faz! Não tenha medo das curvas, nem dos buracos, apenas garanta que a estrada seja florida e lembre de admirar a paisagem.`,
   `As estrelas estão cobertas pelas nuvens, mas elas continuam ali.`,

   `O mesmo acontece com você: a sua força continua aí, mesmo em dias ruins.`,
   `Enquanto houver um louco, um poeta e um amante haverá sonho, amor e fantasia. E enquanto houver sonho, amor e fantasia, haverá esperança.`,
   `Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!`
];

function getRandomPhrase(phrases) {
   let phrase = phrases[Math.floor((Math.random() * phrases.length))];
   return phrase;
}

function showPhrase() {
   const el = document.querySelector(`.phrase`);

   el.innerHTML = getRandomPhrase(phrases);
}

showPhrase();