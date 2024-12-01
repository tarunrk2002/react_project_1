function Prop(prop) {


    let name = prop.name;
    let age = prop.age;

    return (
        <div>
            <h1>name: {name}</h1>
            <h1>age: {age}</h1>
        </div>
    );
}

export default Prop