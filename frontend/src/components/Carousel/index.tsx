import React, {useState, useEffect} from 'react'
import { CarouselData } from '../../dataType'
import './index.scss'
// 定义接口参数类型
interface carouselProps {
  carouselData: CarouselData
}

// 轮播组件体
const Carousel: React.FC<carouselProps> = ({ carouselData }) => {
  const { height, timer, list } = carouselData
  //轮播定时器
  let time = null 
  // 当前展示元素索引
  let [currentIndex, setCurrentIndex] = useState(0)
  // 加载生命周期
  useEffect(() => {
    beginToRun() 
    return () => {
      time = null // 销毁清除定时器
    }
  }, [])

  // 执行动画
  function beginToRun(){
    time = setInterval(() => {
      currentIndex  = currentIndex + 1
      if (currentIndex >= list.length) currentIndex = 0
      setCurrentIndex(currentIndex)
    },timer)
  }
  return (
    <div className="carousel-wrap" style={{height: height+'px'}}>
      <ul className="carousel-container" style={{ left: -currentIndex*100+'%'}}>
        {
          list.map((item,index) => {
            return (
              <li 
                className="carousel-item" 
                key={`carousel-item-${index}`}
                style={{backgroundImage:`url(${item.background})`, color: item.color}}
              >
                <div className="title">{item.title}</div>
                {
                  item.description?.map((text, num) => {
                    return (
                      <p key={`carousel-item-description-${index}-${num}`}>{text}</p>
                    )
                  })
                }
              </li>
            )
          })
        }
      </ul>
      <ul className="carousel-dot-list">
        { 
          list.map((_,index) => {
            return (
              <li key={`carousel-dot-item-${index}`} className={index === currentIndex ? 'active' : ''}>
                <div className="inner" ></div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Carousel