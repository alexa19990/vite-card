const FrontCard = (props) => {
    return(
        <div className="frontcard">
            <div className="header">
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
            <h2 className="card-number">{props.info.number}</h2>
            <dir className='footer'>
                <p>{props.info.name}</p>
                <p>09/00</p>
            </dir>
        </div>
    )
}

export default FrontCard