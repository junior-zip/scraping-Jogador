const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://globoesporte.globo.com/rj/futebol/campeonato-carioca/';

axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const tabelaStatus = $('.ranking-item-wrapper');
    const tabelaJogador =[];

    tabelaStatus.each(function(){
    const nomeJogador = $(this).find('.jogador-nome').text();
const posicaoJogador = $(this).find('.jogador-posicao').text();
const numeroGols =  $(this).find('.jogador-gols').text();
const timeJogador = $(this).find('.jogador-escudo > img').attr('alt');
    tabelaJogador.push({
        nomeJogador,
        posicaoJogador,
        numeroGols,
        timeJogador
    });

})
console.log(tabelaJogador)

}).catch(err => console.log(err));




