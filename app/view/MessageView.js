class MessageView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
            <p>Deseja realmente deletar o empregrado ${model.employee_name}?</p>
        `;
    }

    updateDirect(name) {
        this._elemento.innerHTML = this.templateDirect(name); 
    }

    templateDirect(name) {
        return `
            <p>Deseja realmente deletar o empregrado ${name}?</p>
        `;
    }
}