import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './filter.css';
import Select from 'react-select';
import user from '../../services/userServices';

export default class FilterBox extends Component {
  constructor(props){
    super(props);
    this.state={
      slide: false,
      cats_list: [],
      category: '',
      search: '',
    }
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    
  };
  search=()=>{
    if(this.props.search)
      this.props.search(this.state.search);
    else
      console.log("search function not pass in Filter box component");
  }
  getCats= async (prevProps, nextProps)=>{
    try{
        const res = await user.cats();
        const actualData = await res.data;
        //console.log(actualData);
        let data = [{ value: "",label: "ALL"}];
        data=actualData.map((item)=>{
            return { value: item.id.toString(),label: item.cat_name.toString()};
            
        });
        data = [{ value: "",label: "ALL"},...data];
        if(prevProps !== this.props){
            this.setState({
                cats_list:data,
            });
        }
        console.log(data);

    }
    catch(err){
        console.log(err);
    }
    
  }
  onSelectChange=(value)=>{
    this.setState({ category: value.value});
    if(value.label.toLowerCase()==="all")
      this.props.filterByCat('');
    else if(value.label)
      this.props.filterByCat(value.label);
    else
      console.log("filterByCat function not pass in Filter box component");
  }
  async componentDidMount(){
    // this.setState({seller_id:this.props.user.u_id});
    await this.getCats();
  }
  onSlide=()=>{
    this.setState(prevState => ({
      slide: !prevState.slide
    }));
  }
  
  render() {
    return (
      <>
        <a href="#filter" className={`btn bg-secondary filter-btn `} onClick={this.onSlide}>
            {this.props.icon?this.props.icon:<i className="fas fa-chevron-left"></i> }
        </a>
        <div className={`filter-box ${this.state.slide?"filter-slider-open":"filter-slider-close"}`}>
        {/* <!-- Control sidebar content goes here --> */}
            
            <div className="p-3 filter-content">
              {/* <span className="p-3 filter-box-btn">
                <span className={`btn-dark border-0 px-3 py-4`} onClick={this.onSlide} role="button">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span> */}
              <font className="text-secondary bold h5">
                <i className="fas fa-filter mr-2"></i>
                Filter
              </font>
              <span type="button" onClick={this.onSlide} className="btn btn-tool float-right f-xlrg border-0 pt-1" ><i className="fas fa-times"></i></span>
              <hr className="mb-2"/>
              
              <div className='mt-2'>
                <div className="form-group m-0">
                  <div className="input-group input-group-lg">
                      <input type="search" name="search" className="form-control form-control-lg" placeholder="Type your keywords here" value={this.state.search} onChange={this.handleChange}/>
                      <div className="input-group-append">
                          <button type="submit" className="btn btn-lg btn-default" onClick={this.search}>
                              <i className="fa fa-search"></i>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <Select options={this.state.cats_list} onChange={this.onSelectChange}/>
              </div>
              <div className='mt-2 d-none'>
                <Select options={[]} onChange={this.onSelectChange}/>
              </div>
            </div>
        </div>
        </>
    );
  }
}
