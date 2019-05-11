class DeleteEmployeeView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return ``;
    }

    delete(elementoDelete) {
        elementoDelete.remove();
    } 
}