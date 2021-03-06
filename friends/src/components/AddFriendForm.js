import React, {useState} from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

const AddFriendsForm = (props) => {
    const [friend, setFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: "",
    })
    const handleChanges = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth()
            .post("/api/friends", friend)
            .then(res => console.log(res.data))
            .catch(err => console.log("post error", err));
        setTimeout(() => {
            props.history.push("/friendslist")
        }, 2000)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleChanges}
                    type="text"
                    value={friend.name}
                    placeholder="name"
                    name="name"
                    required>
            </input>
            <label htmlFor="Age">Age</label>
            <input onChange={handleChanges}
                    type="text"
                    value={friend.age}
                    placeholder="age"
                    name="age"
                    required>
            </input>
            <label htmlFor="email">email</label>
            <input onChange={handleChanges}
                    type="text"
                    value={friend.email}
                    placeholder="email"
                    name="email"
                    required>
            </input>
            <button>Submit</button>
        </form>
        </div>
    )

}
export default AddFriendsForm