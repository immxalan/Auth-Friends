import React from "react";

export const FriendsCard  = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Age: {props.age}</h4>
            <h4>Email: {props.email}</h4>
        </div>
    )

}