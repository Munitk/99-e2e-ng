import logo from './logo.svg';
import Address from './address';
//function component 
function Contact() {
    // empty parent can add by fragmentation tag <> </>
    // <div></div>

    return (
        <p>
            <span> I am in Contact component</span>
            <Address time="Monday to Friday"></Address>
            <Address time="Sat to Suday"></Address>
            <img src={logo} width="50" height="50"></img>
        </p>
        
    );
    
}
export default Contact;