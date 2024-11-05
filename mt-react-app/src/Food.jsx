function Food() 
{

    const food1 = "Pasta";
    const food2 = "Pizza";


    return(
        <div>
           <h3>list of foods</h3>
           <ul>
               <li>{food1}</li>
               <li>{food2}</li>
           </ul>
        </div>
    );
}

export default Food
