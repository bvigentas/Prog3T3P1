class EmployeeIdView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
            <div class="row">
                <div class="input-group mb-3 col-md-7">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Nome</span>
                    </div>
                    <input type="text" name="nome" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="${model.employee_name}" disabled>
                </div>
                <div class="input-group mb-3 col-md-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Salario</span>
                    </div>
                    <input type="text" name="salario" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="${model.employee_salary}" disabled>
                </div>
                <div class="input-group mb-3 col-md-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Idade</span>
                    </div>
                    <input type="text" name="idade" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="${model.employee_age}" disabled>
                </div>
            </div>
        `;
    }
}