import { BaseLogger } from "./BaseLogger";


export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo " + data);
    }
}
