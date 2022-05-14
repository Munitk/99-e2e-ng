function Address(props) {
    let isLoggedIn = false;//true
    let address = (
        <p>
            <div>
                <span><b>Torry Harris Business Solutions Pvt Ltd</b> Bengaluru, Karnataka 560037</span>
                <br />
                <span><b>Contact Info:</b>7371893840</span>
                <br></br>
                <span>I am inside address component</span>
                <p>Office time: {props.time}</p>
            </div>
        </p>

    );
    if (isLoggedIn) {
        return (<h1> I am loggIn </h1>)
    } else {
        return address;
    }
}
export default Address;