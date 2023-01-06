import { users } from "../data/users"

export default class CustomerService {
    constructor() {
        this.customers = []
    }
    
    load(){
        this.customers = users.filter(u => u.type === "customer")
    }

    add(customer){
        this.customers.push(customer)
        this.loggerService.log(customer)
    }

    list(){
        return this.customers
    }

    getById(id){
        return this.customers.find( c=> c.id === id)
    }
};
