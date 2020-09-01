import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/action'
import styles from './Userprofile.module.css'

export class Userprofile extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            FilterUsers : []
        }
    }

    handlePage = (e)=>{
        console.log(e.target.id)
        console.log()
        if(e.target.id==="prev" ){
            if(this.state.page>1){
                this.setState({page:this.state.page-1})
                this.props.fetchUsers(this.state.page-1)
            }  
            
        }
        else if(e.target.id==="next"){
            if(this.state.page<this.props.total_pages){
                this.setState({page:this.state.page+1})
                this.props.fetchUsers(this.state.page+1)
            } 
        }
        else{
            this.setState({
                page:Number(e.target.value)
            })
            this.props.fetchUsers(Number(e.target.value))
        }
        
    }

    componentDidMount(){
        this.props.fetchUsers(this.state.page)
    }

    render() {
        var {users} = this.props
        console.log(this.props.users)
        
        return (
            <div>
                {/* <button onClick={()=>fetchUsers(this.state.page)}>Display Users</button> */}
                <h1>USERS</h1>
                <div style={{height:"150px"}}></div>
                <div className="container">
                    <div className={styles.displayFlex}>
                    {users && users.map(item =>(
                        <div className={styles.innerFlex}>
                        <div><img src={item.avatar} alt=""/></div>
                        <div><h2>{item.first_name}</h2></div>
                        </div>
                    ))}
                    </div>
                </div>
                
                <nav aria-label="...">
                    <ul className="pagination float-right">
                    <button  id="prev" onClick={this.handlePage}>prev </button>
                        <button id={this.state.page} value={this.state.page} onClick={this.handlePage}>{this.state.page}</button>   
                    <button  id="next" onClick={this.handlePage}>next</button>
                    </ul>
                </nav>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users : state.users,
    total_pages: state.total_pages
})

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers : (n)=> dispatch(fetchUsers(n))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userprofile)
