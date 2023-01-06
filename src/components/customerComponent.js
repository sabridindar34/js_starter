import CustomerService from "../services/customerService.js";

console.log("Customer component yüklendi.");


let service = new CustomerService()

service.load()
console.log(service.list())
