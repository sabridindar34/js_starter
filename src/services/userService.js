import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {

    constructor(loggerService) {
        this.customers = []
        this.employees = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkUserValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;

                case "employee":
                    if (!this.checkUserValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type!", user))
                    break;
            }
        }
    }

    checkUserValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!(user[field])) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required!`, user))
            }
        }
        return hasErrors
    }


    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkUserValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;

            case "employee":
                if (!this.checkUserValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;

            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type!", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    listEmployees() {
        return this.employees
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getEmployeeById(id) {
        return this.employees.find(u => u.id === id)
    }
}