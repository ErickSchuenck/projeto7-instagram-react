import React from 'react';
import Stories from './Stories.js';
import Posts from './Posts.js'
import User from './User.js';
import Suggestions from './Suggestions.js';

export default function Corpo() {
  return (
    <div class="corpo">
        <div className='esquerda'>
            <Stories />
            <Posts />
        </div>
        <div class="sidebar">
          <User />
          <Suggestions />
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
  )
}
