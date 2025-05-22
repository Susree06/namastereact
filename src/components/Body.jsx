import RestaurantCard from "./RestaurantCard";
import "../index.css"
import { type } from "@testing-library/user-event/dist/type";
import restaurantList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body =()=>{

    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData=async ()=>{
        const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData= await data.json();
        console.log(jsonData);
        setListofRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    }
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            console.log(searchText);
            let txt = String(searchText).toLowerCase()
            const filteredRestaurant = listofRestaurant.filter((restaurant)=> String(restaurant?.info?.name).toLowerCase().includes(txt))
            setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        <button className="filter-button"
        onClick={()=>{
            const filteredList=listofRestaurant.filter(
                (res)=>res?.info?.avgRating>4.5
            )
            setListofRestaurant(filteredList);
        }}
        >
            Top Rated Button
        </button>
      </div>
      <div className="restaurant-card">

        {
            filteredRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.info?.id} resData={restaurant}/>
        ))
        }
        </div>  
    </div>
  )
}

export default Body;