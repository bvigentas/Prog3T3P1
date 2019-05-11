class EmployeeView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                </tr>
            </thead>
            
            <tbody id="corpo-tabela">
                ${model.slice(0,10).map((employee) => {

                    return `
                        <tr id="employee${employee.id}">
                            <td>${employee.id}</td>
                            <td>${employee.employee_name}</td>
                            <td>${employee.employee_salary}</td>
                            <td>${employee.employee_age}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }
}