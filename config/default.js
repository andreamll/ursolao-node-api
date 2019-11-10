//----------
// ARQUIVO: CONFIG > DEFAULT.JS
// OBJETIVO: ARMAZENA CONFIGURACOES GERAIS
//----------

module.exports = {

    //CHAVE PARA GERACAO DO TOKEN
    secret: 'PHBfdnh3YC9A2gGyTM+a48UlG2rgV5zTBy89OVveB5aUCCzXGMWH/5ImZVoVfy8SDTtYWojOv/M86zKKCz2sPQ==',
    
    //CONFIG PARA ARMAZENAR E UTILIZAR O CACHE
    cache : {
        store: 'memory', //tipo de estrategia de cache
        ttl: 600, // tempo de vida do cache em segundos
        max: 100, //qtde de itens salvos na memoria
    }

}