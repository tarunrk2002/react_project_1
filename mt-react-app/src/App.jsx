import Student from './Students.jsx';
import Card from './Card.jsx'
import Button from './Button.jsx'

function App() {
  return(

    <>
   
   <Card/>
   <Button/>
 
   <Student name="Jane Doe" age={25} isstudent={false}></Student> 
  
   
    </>
   
  );
}

export default App
