import "../index.css";
import { CDN_URL } from "../utils/constants";

const styleCard={
  backgroundColor: "#f0f0f0"
}


const RestaurantCard =(props)=>{

    const {resData}=props;
   const { analytics, cta, info = {} } = resData;

  const {
    name = "Unknown",
    cuisines = [],
    avgRating = "N/A",
    sla: { deliveryTime = 0 } = {},
    cloudinaryImageId
  } = info;

  return(
      <div className="res-card" style={styleCard}>
        
        <img className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="meghana food logo"
        />    
        <h5 className="details">{name}</h5>
        <h6 className="details">{cuisines?.join(",")}</h6>
        <h6 className="details">{avgRating} stars</h6>
        <h6 className="details">{deliveryTime} minutes </h6>  
      </div>
  )
}

export default RestaurantCard