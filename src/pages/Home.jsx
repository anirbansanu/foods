import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

// import Categories from '../components/filter/Categories';
// import FilterBox from '../components/filter/FilterBox';
import FoodList from '../components/FoodList';
import user from '../services/userServices';
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            filterList:[],
            search: '',
            loaded:false
        }
    }
    async getProductList(){
        try{
            const res = await user.foods();
            // console.log(res.data);
            const actualData = await res.data;
            this.setState({
                list:actualData,
                filterList: actualData
            });
            actualData?this.setState({loaded: true}):this.setState({loaded: false});
            console.log(actualData);
    
        }
        catch(err){
            console.log(err);
        }
        
    }
    onSearch=(str)=>{ 
        console.log("Msg From Home Page");
        const data = this.state.list.filter(p => p.name.toLowerCase().includes(str.toLowerCase()));
        this.setState({filterList: data});
        //console.log(str);
        console.log(data);
    }
    filterByCat=(str)=>{
        console.log("Msg From Home Page filterByCat function");
        const data = this.state.list.filter(p => p.cat_name.toLowerCase().includes(str.toLowerCase()));
        this.setState({filterList: data});
        console.log(str);
        console.log(data);
    }
    componentDidMount(){
        
        try{
            // const jwt=localStorage.getItem('food');
            // const user=jwtDecode(jwt);
            // if(jwt){
            //     toast.success(`WelCome`);
            //     // this.props.history.push('/home');
            // }
            // else{
            //     
            //     toast.error("email or password not matched");
            //     return <Navigate to="/" replace />;
            // }
            this.setState({user});
            console.log(user.id);
            this.getProductList();
          }catch(e){}  
        //console.log(this.props);
    }
    render() {
        return (
            <>
            <div className='content-wrapper'>
                {this.state.list?
                    <FoodList list={this.state.filterList} loaded={this.state.loaded}/>:"No Data"
                }
            </div>
            </>
        )
    }
}
