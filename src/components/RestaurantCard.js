import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
  const { resData } = props
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <div className="res-details">
        <h1>{name}</h1>
        <h4>{cuisines.join(",")}</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <div className="res-info">
          <span className="rating">{avgRating} star</span>
          <span className="delivery-time">{deliveryTime} min</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
