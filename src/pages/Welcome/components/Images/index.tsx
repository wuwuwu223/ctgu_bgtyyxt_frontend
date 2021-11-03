import React, {Component} from 'react';
import {GetImgList, login} from "@/services/ant-design-pro/api";
import {Carousel, Col} from "antd";

class Image extends Component {

  constructor() {
    super();
    this.state={imgs:[]}
  }
  componentDidMount() {
       this.a()
  }
  a= async () => {
    const msg = await GetImgList();
    this.setState({imgs: msg.data})
    console.log(msg.data)
  }
  render() {
    return (
      <Carousel autoplay>
        {
          this.state.imgs?.map((value)=>{
           return  <img src={value.url} />
          })
        }
      </Carousel>
    );
  }
}

export default Image;
