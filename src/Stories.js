import React from 'react'
import Storie from './Storie'
const stories = [
    {
        username: '9gag',
        profilePicture: 'assets/img/9gag.svg'
    },
    {
        username: 'meowed',
        profilePicture: 'assets/img/meowed.svg'
    },
    {
        username: 'barked',
        profilePicture: 'assets/img/barked.svg'
    },
    {
        username: 'nathanwpylestrangeplanet',
        profilePicture: 'assets/img/nathanwpylestrangeplanet.svg'
    },
    {
        username: 'wawawicomics',
        profilePicture: 'assets/img/wawawicomics.svg'
    },
    {
        username: 'respondeai',
        profilePicture: 'assets/img/respondeai.svg'
    },
    {
        username: 'filomoderna',
        profilePicture: 'assets/img/filomoderna.svg'
    },
    {
        username: 'memeriagourmet',
        profilePicture: 'assets/img/memeriagourmet.svg'
    }
]
export default function Stories() {
    return (
        <div>
            <div class="stories">
                {stories.map(({username, profilePicture}) => (<Storie  profilePicture={profilePicture} username ={username}/>))}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}
