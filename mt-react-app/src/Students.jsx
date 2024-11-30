function Student(abc){
    return(
        <div>
            <h1>My name is {abc.name}</h1>
            <h1>My age is {abc.age}</h1>
            <h1>My is student is {abc.isstudent ? "true" : "false"}</h1>
        </div>
    );

}

export default Student