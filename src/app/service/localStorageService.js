class LocalStorageService {

    static adicionarItem(chave, valor) {
        localStorage.addItem(chave, JSON.stringify(valor))
    }

    static async obterItem(chave){
        const item = localStorage.getItem(chave)
        return JSON.parse(item);
    }

}

export default LocalStorageService;