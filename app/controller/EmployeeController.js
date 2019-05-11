class EmployeeController {

    constructor() {
        this._employeeView = new EmployeeView(document.querySelector('#employeeView'));
        this._employeeIdView = new EmployeeIdView(document.querySelector('#employeeIdView'));
        this._newEmployeeView = new NewEmployeeView(document.querySelector('#corpo-tabela'));
        this._messageView = new MessageView(document.querySelector('#conteudo-msg'));
    }

    getEmployees() {
        var that = this;
        $.ajax({
            url: 'http://dummy.restapiexample.com/api/v1/employees',
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: function(resposta) {
              this._employeeView.update(resposta);
            }.bind(this),
            error: function(resposta) {
              if (resposta.status === 400) {
                  new TratadorErros.publicaErros(resposta.responseJSON);
              }
            }
        });
    }

    getEmployeeId(event){
        event.preventDefault();
        $.ajax({
            url: `http://dummy.restapiexample.com/api/v1/employee/${event.target.tiIdBuscar.value}`,
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: function(resposta) {
              this._employeeIdView.update(resposta);
            }.bind(this),
            error: function(resposta) {
              if (resposta.status === 400) {
                  new TratadorErros.publicaErros(resposta.responseJSON);
              }
            }
        }); 
    }

    postEmployee(event) {
        if (!this._newEmployeeView._elemento) {
            this._newEmployeeView = new NewEmployeeView(document.querySelector('#corpo-tabela')); 
        }
        event.preventDefault();
        $.ajax({
            url: 'http://dummy.restapiexample.com/api/v1/create',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify ({"name": event.target.nome.value,"salary": event.target.salario.value,"age": event.target.idade.value,"id": "0"}),
            success: function(resposta) {
                this._newEmployeeView.updateAdding(resposta);
            }.bind(this),
            error: function(resposta){
                console.log(resposta);
            }
        });
    }

    putEmployee(event) {
        event.preventDefault();
        const updateEmployeeView = new UpdateEmployeeView(document.querySelector(`#employee${event.target.idPut.value}`), event.target.idPut.value);
        $.ajax({
            url: `http://dummy.restapiexample.com/api/v1/employee/${event.target.idPut.value}`,
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: function(resposta) {
                const params = {
                    'name': event.target.nomePut.value === '' ? resposta.employee_name : event.target.nomePut.value,
                    'salary': event.target.salarioPut.value === '' ? resposta.employee_salary : event.target.salarioPut.value,
                    'age': event.target.idadePut.value === '' ? resposta.employee_age : event.target.idadePut.value,
                };
                $.ajax({
                    url: `http://dummy.restapiexample.com/api/v1/update/${event.target.idPut.value}`,
                    contentType: 'application/json',
                    dataType: 'json',
                    type: 'put',
                    data: JSON.stringify(params),
                    success: function(resposta) {
                        updateEmployeeView.update(resposta);
                    }.bind(this),
                    error: function(resposta) {
                    if (resposta.status === 400) {
                        new TratadorErros.publicaErros(resposta.responseJSON);
                    }
                    }
                });
            }.bind(this),
            error: function(resposta) {
              if (resposta.status === 400) {
                  new TratadorErros.publicaErros(resposta.responseJSON);
              }
            }
        });    
    }

    deleteIdEmployee(event) {
        
        event.preventDefault();
        const deleteView = new DeleteEmployeeView(document.querySelector(`#corpo-tabela`));
        const idDeletado = event.target.tiIdBuscarDelete.value;
        $.ajax({
            url: `http://dummy.restapiexample.com/api/v1/employee/${event.target.tiIdBuscarDelete.value}`,
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: function(resposta) {
                this._messageView.update(resposta);
                const modal = new Promise(function(resolve, reject){
                    $('#myModal').modal('show');
                    $('#myModal .btn-delete').click(function(){
                        $('#myModal').modal('hide');
                        $.ajax({
                            url: `http://dummy.restapiexample.com/api/v1/delete/${idDeletado}`,
                            contentType: 'application/json',
                            dataType: 'json',
                            type: 'delete',
                            success: function(resposta) {
                                deleteView.delete(document.querySelector(`#employee${idDeletado}`));
                            }.bind(this),
                            error: function(resposta) {
                                console.log(resposta);
                            }
                        });
                    });
                    $('#myModal .btn-fechar').click(function(){
                        $('#myModal').modal('hide');
                    });
                }).then(function(val){
                    alert(val);
                }).catch(function(err){
                    console.log(err)
                });
            }.bind(this),
            error: function(resposta) {
              if (resposta.status === 400) {
                  new TratadorErros.publicaErros(resposta.responseJSON);
              }
            }
        });
    }

    deleteNomeEmployee(event) {
        event.preventDefault();
        const deleteView = new DeleteEmployeeView(document.querySelector(`#corpo-tabela`));
        $.ajax({
            url: 'http://dummy.restapiexample.com/api/v1/employees',
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: function(resposta) {
                resposta.forEach( employee => {
                    if (employee.employee_name == event.target.tiNomeBuscarDelete.value) {
                        const idDeletado = employee.id;
                        this._messageView.updateDirect(event.target.tiNomeBuscarDelete.value);
                        const modal = new Promise(function(resolve, reject){
                            $('#myModal').modal('show');
                            $('#myModal .btn-delete').click(function(){
                                $('#myModal').modal('hide');
                                $.ajax({
                                    url: `http://dummy.restapiexample.com/api/v1/delete/${idDeletado}`,
                                    contentType: 'application/json',
                                    dataType: 'json',
                                    type: 'delete',
                                    success: function(resposta) {
                                        deleteView.delete(document.querySelector(`#employee${idDeletado}`));
                                    }.bind(this),
                                    error: function(resposta) {
                                        console.log(resposta);
                                    }
                                });
                            });
                            $('#myModal .btn-fechar').click(function(){
                                $('#myModal').modal('hide');
                            });
                        }).then(function(val){
                            alert(val);
                        }).catch(function(err){
                            console.log(err)
                        });
                    }
                });
            }.bind(this),
            error: function(resposta) {
              if (resposta.status === 400) {
                  
              }
            }
        });
    }




    adcionaVarios(event) {
        for (let i = 0; i < 10000; i++) {
            this.add(i);
        }
        
    }

    add(i) {
        $.ajax({
            url: 'http://dummy.restapiexample.com/api/v1/create',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify ({"name": 'paraDeApagarFDP'+i,"salary": i,"age": i,"id": "0"}),
            success: function(resposta) {
                console.log("TALKEI");
            }.bind(this),
            error: function(resposta){
                console.log(resposta);
            }
        });
    }
}