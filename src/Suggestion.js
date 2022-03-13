import React from 'react'

export default function Suggestion({
    username,
    profilePicture,
    followsYou,
    newUser
}) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={profilePicture} />
                <div class="texto">
                    <div class="nome">{username}</div>
                    <div class="razao">{followsYou ? "Segue você" : newUser ? "Novo no Instagram" : ""}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
