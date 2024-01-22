"use server"

import { scrapeProdutoAmazon } from "../scraper";

export async function scrapeAndStoreProduct (produtoUrl: string){
    if(!produtoUrl) return;

    try {
        const scrapedProduto = await scrapeProdutoAmazon (produtoUrl);
    } catch (error: any) {
        throw new Error (`Falha em criar/atualizar produto: ${error.message}`);
    }
}