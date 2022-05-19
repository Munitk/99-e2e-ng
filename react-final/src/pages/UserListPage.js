import logo from '../logo.svg';


export default function UserListPage(props) {

    return (

        <div className='row'>
            <div className='col-3'>
                <div className="card" >
                    <img src={logo} width="100" height={100} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>

    )

}