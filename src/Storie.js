import React from 'react'

export default function Storie({username, profilePicture}) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={profilePicture} />
            </div>
            <div class="usuario">
                {username}
            </div>
        </div>
    )
}
