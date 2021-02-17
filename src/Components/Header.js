import React, { Component } from 'react'


export class Header extends Component {
    constructor(props) {
        super(props)

    }

    render() {
    
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href='/'>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/employee">Employee</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/role">Role</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Organization">Organization</a>
                    </li>
                </ul>
                
            </div>
        )
    }
}


