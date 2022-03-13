import React from 'react'

export default function MyUserData({ myProfilePicture, myUsername, myName }) {
    return (
    <>
        <img src={myProfilePicture} />
        <div class="texto">
            <strong>{myUsername}</strong>
            {myName}
        </div>
    </>
    )
}
