class UpdateEmployeeView extends View{

    constructor(elemento, id) {
        super(elemento);
        this._id = id;
    }

    template(model) {

        return `
            <td>${this._id}</td>
            <td>${model.name}</td>
            <td>${model.salary}</td>
            <td>${model.age}</td>
        `;
    }
}