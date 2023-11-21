import React, { Component } from 'react'
import { MenuItem } from './MenuItem'
import './NavBar.css'
import { Button } from '../Button/Button'

class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <nav className='NavbarItems'>
                
                <a href='/'  style={{textDecoration: "none", color: 'inherit' }}><h1 className='navbar-logo' >Trivia <i className='fas fa-lightbulb'></i></h1></a>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <a href='/signup'>
                <Button href="/sign">Sign up</Button>
                </a>
            </nav>
        )
    }
}

export default Navbar