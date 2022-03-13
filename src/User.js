import React from 'react'
import MyUserData from './MyUserData'
const myUserData = 
[
    {
        myProfilePicture: 'assets/img/catanacomics.svg',
        myUsername: 'catanacomics',
        myName: 'catana'
    }
]
export default function User() {
    return (
        <div class="usuario">
            {myUserData.map(({myProfilePicture, myUsername, myName}) => 
            (<MyUserData 
                myProfilePicture={myProfilePicture}
                myUsername={myUsername}
                myName={myName}
            />))}
        </div>
    )
}
