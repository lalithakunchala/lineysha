import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/action'
import styles from './Userprofile.module.css'

export class Userprofile extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1
        }
    }


    render() {
        var {fetchUsers} = this.props
        console.log(this.props.users)
        return (
            <div>
                <button onClick={()=>fetchUsers(this.state.page)}>Display Users</button>
                <div style={{height:"150px"}}></div>
                <div className="container">
                    <div className={styles.displayFlex}>
                    {this.props.users && this.props.users.map(item =>(
                        <div className={styles.innerFlex}>
                        <div><img src={item.avatar} alt=""/></div>
                        <div><h2>{item.first_name}</h2></div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users : state.users
})

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers : (n)=> dispatch(fetchUsers(n))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userprofile)
