import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        //not working - to check for cors  // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6299604&lng=77.203868&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6299604&lng=77.203868&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )

      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }

      const json = await response.json()
      setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  if (listOfRestaurant.length === 0) {
    return (
      <div className="shimmer-container">
        {Array.from({ length: 8 }).map(
          (
            _,
            index // Assuming you want 8 shimmer cards
          ) => (
            <Shimmer key={index} />
          )
        )}
      </div>
    )
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((item) =>
                item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              setFilteredRestaurant(filteredList)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            )
            setFilteredRestaurant(filterList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant.info.id} className="link">
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Body
