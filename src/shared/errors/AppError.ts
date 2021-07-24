
export class AppError {
    
    constructor(private message: string, private statusCode: number = 400){
        this.message = message
        this.statusCode = statusCode

    }
}
