function HandleFormSubmit(e){
    e.preventDefault();               // prevent page reload  
    console.log("form submit")
}

export default function FormSubmit(){
    return(
        <>
        <form onSubmit={HandleFormSubmit}>
            <h1>Form Submit</h1>
            <button>Submit</button>
        </form>
        </>
    )
}