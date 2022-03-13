import React from 'react'
import Post from './Post'
const posts = 
[
    {
        username: 'Meowed',
        profilePicture: 'assets/img/meowed.svg',
        postImage: 'assets/img/gato-telefone.svg',
        likes: {
            userThatLiked: 'respondeai',
            userThatLikedProfilePicture: 'assets/img/respondeai.svg',
            numberOfLikes: 101524
        }
    },
    {
        username: 'barked',
        profilePicture: 'assets/img/barked.svg',
        postImage: 'assets/img/dog.svg',
        likes: {
            userThatLiked: 'adorable_animals',
            userThatLikedProfilePicture: 'assets/img/adorable_animals.svg',
            numberOfLikes: 99160
        }
    }
]
export default function Posts() {
  return (
    <div class="posts">
        {posts.map(({username, profilePicture, postImage, likes}) => (
            <Post 
            username = {username}
            profilePicture = {profilePicture}
            postImage = {postImage}
            likes = {likes}
            />
        ))}
    </div>
  )
}
