import React from "react";
import "./App.css";

// 引入全局数据类型定义
import { CarouselData } from './dataType'

// 引入轮播组件
import Carousel from './components/Carousel'

// 引入背景图片
import airpods from './assets/airpods.png'
import iphone from './assets/iphone.png'
import tablet from './assets/tablet.png'

// 定义轮播图数据
let carouselData: CarouselData = {
  height: 400, // 限定高度
  timer: 3000, // 轮播间隔[ms]
  list: [
    {
      background: airpods,
      color: 'black',
      title: 'this is first text!',
      description: ['I hope the worldpeace'] 
    },
    {
      background: iphone,
      color: 'white',
      title: 'this is second text!',
      description: []
    },
    {
      background: tablet,
      color: 'black',
      title: 'this is third text!',
      description: ['I hope the worldpeace','I like this word']
    }
  ]
}

function App() {
  return (
    <div className="App">
      <Carousel carouselData={carouselData}></Carousel>
    </div>
  )
}

export default App
