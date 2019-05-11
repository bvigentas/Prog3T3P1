class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        throw new Error('Método template deve ser implementado');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model); 
    }

    updateAdding(model) {
        this._elemento.innerHTML += this.template(model);
    }
}