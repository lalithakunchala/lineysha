import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers, findId} from '../../redux/action'
import styles from './Userprofile.module.css'

export class Userprofile extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            name:""
        }
    }

    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
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

    componentWillMount(){
        this.props.fetchUsers(this.state.page)
    }

    render() {
        var {users} = this.props
        var {name} = this.state
        console.log(this.props.users)
        
        return (
            <div>
                {/* <button onClick={()=>fetchUsers(this.state.page)}>Display Users</button> */}
                <h1 className={styles.user}>USERS</h1>
                <input onChange={this.handleChange} type="search" />
                {/* <button onClick={this.handleSearch}>Search</button> */}
                <div style={{height:"150px"}}></div>
                <div className="container">
                    <div className={styles.displayFlex}>
                    {users &&

                        users.filter(item=>{
                            
                            if(this.state.name){
                                return item.first_name==name || item.last_name==name
                            }
                            else{
                                return item
                            }
                            
                        }).map(item =>(
                        
                        <div key ={item.id} className={styles.innerFlex}>
                        <div id={item.id} onClick={()=>this.props.findId(item.id)}><Link to={`/${item.id}`}><img id={item.id} src={item.avatar} alt=""/></Link></div>
                        <div><h2>{item.first_name}</h2></div>
                        </div>
                    ))}
                    </div>
                </div>
                
                {!name && <nav aria-label="...">
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
    total_pages: state.total_pages,
    id:state.id
})

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers : (n)=> dispatch(fetchUsers(n)),
        findId : (n) => dispatch(findId(n))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userprofile)
