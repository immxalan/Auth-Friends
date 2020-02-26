import React, {useState, useEffect} from "react";
import { FriendsCard } from "./FriendsCard";
import { axiosAuth } from "../utils/axiosAuth";

 const FriendsList = () => {
const [friends, setFriends] = useState([])
useEffect(() => {
    axiosAuth()
        .get("/api/friends")
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))

}, []);
return(
    <div>
    {friends.map( friend =>(
        <FriendsCard 
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}/>
    ))}
    </div>
)
}


export default FriendsList
