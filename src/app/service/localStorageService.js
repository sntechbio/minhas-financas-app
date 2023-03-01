class localStorage {

    static addItem(chave, valor) {
        localStorage.addItem(chave, valor)
    }

    static obterItem(chave){
        const item = localStorage.getItem(chave)
        return JSON.parse(item);
    }

}

export default localStorage;