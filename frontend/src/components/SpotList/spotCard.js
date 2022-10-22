import {Link} from 'react-router-dom'


const SpotCard = ({spot}) => {
    return (
    <Link style={{ textDecoration: "none", color: "black" }} to={`/spots/${spot.id}`}>
        <div className='spotCard-box'>
            <img src={spot.previewImage} className='preview-img'/>
            <div className='spotcard-content'>
                    <div className="bold">{spot.city}, {spot.country}</div>
                <div>
                {spot.avgRating ?
              (<span>★{spot.avgRating}</span>):
              (<span>★rate this spot</span>)
            }
               </div>
            <div >{spot.name}</div>
            <div></div>
            <div><span className="bold">${spot.price}</span>   night</div>
            </div>
        </div>
    </Link>

    )
}


export default SpotCard
