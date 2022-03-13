import React from 'react'
import Suggestion from './Suggestion'
const suggestions = [
    {
        username: "bad.vibes.memes",
        profilePicture: "assets/img/bad.vibes.memes.svg",
        followsYou: true,
        newUser: false
    },
    {
        username: "chibirdart",
        profilePicture: "assets/img/chibirdart.svg",
        followsYou: true,
        newUser: true
    },
    {
        username: "razoesparaacreditar",
        profilePicture: "assets/img/razoesparaacreditar.svg",
        followsYou: false,
        newUser: true
    },
    {
        username: "adorable_animals",
        profilePicture: "assets/img/adorable_animals.svg",
        followsYou: true,
        newUser: true
    },
    {
        username: "smallcutecats",
        profilePicture: "assets/img/smallcutecats.svg",
        followsYou: true,
        newUser: false
    }
]

export default function Suggestions() {
    return (
    <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map(({username, profilePicture, followsYou, newUser}) => (
                <Suggestion
                profilePicture={profilePicture}
                username={username}
                followsYou={followsYou}
                newUser={newUser}/>
            ))}
    </div>
    );
}
