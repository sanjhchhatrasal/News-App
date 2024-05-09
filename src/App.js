
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter , Routes ,Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
         <div>
            <Navbar/>
             <LoadingBar
               color='#f11946'
                 progress={this.state.progress}
         /> 
            <Routes>  <Route path='/' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "general" />} ></Route>  </Routes>
            <Routes> <Route path='/business' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "business"/>} ></Route> </Routes>
            <Routes> <Route path='/entertainment' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "entertainment"/>} ></Route> </Routes>
            <Routes> <Route path='/general' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "general"/>} ></Route> </Routes>
            <Routes> <Route path='/health' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "health"/>} ></Route> </Routes>
            <Routes> <Route path='/science' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "science"/>} ></Route> </Routes>
            <Routes> <Route path='/sports' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "sports"/>} ></Route> </Routes>
            <Routes> <Route path='/technology' element={<News setProgress=   {this.setProgress}  pageSize = {this.pageSize} country = "in" category = "technology"/>} ></Route> </Routes>  

         </div>
        </BrowserRouter>
      </div>
    )
  }
}


