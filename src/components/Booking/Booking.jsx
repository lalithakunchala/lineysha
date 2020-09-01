import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import styles from './Booking.module.css'

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
                <Link to="/"><div style={{float:"right",padding:"20px"}}>Home</div></Link>
                     
                {productObj && <div className={styles.mainDiv}>
                    <div><img  src={productObj.avatar} alt=""/></div>
                    <div className={styles.nameDiv}>Firstname: <span className={styles.nam}>{productObj.first_name}</span></div>
                    <div className={styles.nameDiv}>LastName: {productObj.last_name} </div>
                    <div className={styles.nameDiv}>Email: {productObj.email} </div>
                </div> }
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
