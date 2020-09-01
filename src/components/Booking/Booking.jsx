import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.id)
            const productObj = this.props.users.find((element) => element.id == this.props.id) 
        return (
            <div>
                <Link to="/"><div>Home</div></Link>
                     
                {productObj && <div style = {{border : "1px solid black"}}>
                    <p> {productObj.first_name} </p>
                    <p> {productObj.last_name} </p>
                </div> }
        
    }
            </div>
            )
    }
}


const mapStateToProps = (state) => ({
    users : state.users,
    id: state.id
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
