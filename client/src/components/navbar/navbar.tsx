import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main-navigation'>
        <div className='navbar-brand'>
          <a href='#'>
            <img
              src='src\assets\images\logo\musicial_full_logo_black_on_white.png'
              alt='Musicial'
              width='250'
            />
          </a>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <span className='navbar-item'>
              <div className='control has-icons-left'>
                <input className='input' type='text' placeholder='Search' />
                <span className='icon is-small is-left'>
                  <FontAwesomeIcon icon='search' />
                </span>
              </div>
            </span>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='#'>
                <FontAwesomeIcon icon='plus-square' />
                <span className='ml-2'>Nouvelle annonce</span>
              </a>
            </div>
            <div className='navbar-item'>
              <a href='#'>
                <FontAwesomeIcon icon='envelope' />
                <span className='ml-2'>Messages</span>
              </a>
            </div>
            <div className='navbar-item'>
              <a href='#'>
                <FontAwesomeIcon icon='heart' />
                <span className='ml-2'>Favoris</span>
              </a>
            </div>
            <div className='navbar-item has-dropsown is-hoverable'>
              <a className='navbar-link' href='#'>
                <FontAwesomeIcon icon='user-circle' />
                <span className='ml-2'>Profil</span>
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item'>Mon compte</a>
                <a className='navbar-item'>Paramètres</a>
                <a className='navbar-item'>Aide</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>
                  <div className='button is-danger is-light'>
                    <span className='mr-2'>Déconnexion</span>
                    <FontAwesomeIcon
                      icon='sign-out-alt'
                      className='text-lg leading-lg text-white opacity-75'
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-primary' href='/login'>
                <FontAwesomeIcon
                  icon='sign-in-alt'
                  className='text-lg leading-lg text-white opacity-75'
                />
                <span className='ml-2'>Connexion</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
