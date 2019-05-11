class NewEmployeeView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
            <tr id="employee${model.id}">
                <td>${model.id}</td>
                <td>${model.name}</td>
                <td>${model.salary}</td>
                <td>${model.age}</td>
            </tr>
        `;
    }
}