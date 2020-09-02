import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import styles from './Booking.module.css'
import DatePicker from 'react-datepicker';
import { fetchDate} from '../../redux/action'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            startDate: "",
            min:"",
            hour:""
        }
    }

    handleChange = (date)=> {
        console.log(date)
        this.setState({
          startDate: new Date()
        })
      }
    
      handleSubmit = (e)=> {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main);
        this.props.fetchDate(main)
      }

    //   handleSubmit(e) {
    //     e.preventDefault();
    //     let mainDate = this.state.startDate;
    //     const dateObj = {
    //       sDate: mainDate.format('L')
    //     }
    //     axios.post('http://localhost:4000/dates/add', dateObj)
    //         .then(res => console.log(res.data));
    //   }
    render() {
        console.log(this.props.id)
            const productObj = this.props.users.find((element) => element.id == this.props.id) 
        return (
            <div>
                <Link to="/"><div style={{float:"right",padding:"30px",color:"white"}}>Home</div></Link>
                     
                {productObj && <div className={styles.mainDiv}>
                    <div><img  src={productObj.avatar} alt=""/></div>
                    <div className={styles.nameDiv}>Firstname: <span className={styles.nam}>{productObj.first_name}</span></div>
                    <div className={styles.nameDiv}><h3>LastName: {productObj.last_name} </h3></div>
                    <div className={styles.nameDiv}><h3>Email: {productObj.email}</h3> </div>
                </div> }

                <div className = "container">
                    <h3>React Datepicker Example</h3>
                    <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label>Select Date: </label>
                            <DatePicker
                            selected={this.state.startDate}
                            onChange={date => this.setState({startDate:date})}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Add Date</button>
                    </div>
                    </form>
                </div>

            </div>
            )
    }
}


const mapStateToProps = (state) => ({
    users : state.users,
    id: state.id,
    dateRes: state.dateRes
})

const mapDispatchToProps = dispatch=>{
   return{
       fetchDate : (n)=>dispatch(fetchDate(n))
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)


