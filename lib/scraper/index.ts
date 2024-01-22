export async function scrapeProdutoAmazon(url: string) {
    if(!url) return;

    //Configurações PRoxy BrightData
    const usuario = String(process.env.BRIGHT_DATA_USERNAME);
    const senha = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const id_sessao = (1000000 * Math.random()) | 0;

    const opcoes= {
        auth: {
            usuario: `${usuario}-session-${id_sessao}`,
            senha,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }

    try {
        //const response = await axios.get(url, opcoes);
    } catch (error: any) {
        throw new Error(`Falha em scrapear produto: ${error.message}`)
    }
}