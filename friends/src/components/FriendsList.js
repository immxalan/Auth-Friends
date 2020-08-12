import React, {useState, useEffect} from "react";
import { FriendsCard } from "./FriendsCard";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

 const FriendsList = () => {
const [friends, setFriends] = useState([])
useEffect(() => {
    AxiosWithAuth()
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