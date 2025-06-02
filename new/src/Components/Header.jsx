import React from "react"

export default function Header(prop) {

    return (
        <header>
            <img alt="" src={prop.avatar} />
            <p>{prop.userName}</p>
        </header>
    )
}
