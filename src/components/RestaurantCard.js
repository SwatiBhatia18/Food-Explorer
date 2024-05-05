import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure resData.data with default values
  const {
    name,
    avgRating,
    cuisines ,
    costForTwo,
    sla,
    cloudinaryImageId
  } = resData?.info || {};

  return (
    <div className="res-card">
      {cloudinaryImageId && 
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      }
      <div className="res-details">
        <h1>{name}</h1>
        <h4>{cuisines?.join(", ")}</h4>
        {costForTwo && <h4>{costForTwo}</h4>}
        <div className="res-info">
          <span className="rating">{avgRating} star</span>
          <span className="delivery-time">{sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
