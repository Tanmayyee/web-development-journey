class AppError extends Error{
    constructor(message,status){
        super();
        this.message = message; // `this.message` becomes the message passed to AppError instead of the default Error message.
        this.status=status;
    }
}

export default AppError;