import React, { Component } from 'react'
import Footer from './Footer'
import { Header } from './Header'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Welcome to Admin Page</h1>
                <Footer/>
            </div>
        )
    }
}

export default Home
