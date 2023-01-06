import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let user1 = new User(1, "Ali", "Yılmaz", "İstanbul", 25)
let user2 = new User(2, "Murat", "Kaya", "Ankara", 23)
let logger = new MongoLogger()
let service = new UserService(logger)

// service.add(user1)
// service.add(user2)
// console.log(service.list())
// console.log(service.getById(1))



let customerToAdd = new Customer(8, "Furkan", "Ak", "Antalya", 24)

service.load()
customerToAdd.type = "customer"
service.add(customerToAdd)
// service.add(new UserAddModel(9, "Emre", "Sönmez", "Antalya", 25, "customer"))
console.log(service.customers);
console.log(service.employees);
console.log(service.errors);