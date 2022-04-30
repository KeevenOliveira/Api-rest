export default class AppError {
    public readonly message: string;

    public readonly statusCode: number; //404, 500, 200...

    constructor(message: string, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }

}