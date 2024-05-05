import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([])
  const { resId } = useParams()

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6299604&lng=77.203868&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&query=North%20Indian&submitAction=ENTER`
      )

      if (!response.ok) {
        throw new Error("Failed to fetch menu")
      }

      const json = await response.json()
      setResInfo(json.data)
    } catch (error) {
      console.error("Error fetching menu:", error)
    }
  }

  if (!resInfo || resInfo.length === 0) return <Shimmer />

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {}

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {}

  console.log("itemCards", itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h2>{cuisines && cuisines.join(", ")}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.cardId}>
              {item.card.info.name} - Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu
