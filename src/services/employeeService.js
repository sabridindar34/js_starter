import { users } from "../data/users"

export default class EmployeeService {
    constructor() {
        this.employees = []
    }

    load(){
        this.employees = users.filter(u => u.type === "employee") 
    }

    add(employee){
        this.employees.push(employee)
        this.loggerService.log(employee)
    }

    list(){
        return this.employees
    }

    getById(){
        return this.employees.find(e => e.id === id)
    }
};
