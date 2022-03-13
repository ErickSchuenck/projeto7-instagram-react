import React from 'react'

export default function Post({username, profilePicture, postImage, likes}) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={profilePicture} />
                    {username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={postImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likes.userThatLikedProfilePicture} />
                    <div class="texto">
                        Curtido por <strong>{likes.userThatLiked}</strong> e <strong>outras {likes.numberOfLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
