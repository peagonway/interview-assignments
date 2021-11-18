// 定义轮播元素接口
interface CarouselItem{
  background: string, // 背景图片
  color: string,      // 元素内文字颜色
  title: string,      // 元素标题
  description?: string[]  //描述列表
}

// 暴露轮播接口
export interface CarouselData {
  height: number, // 轮播高度
  timer: number,  // 轮播间隔时间
  list: CarouselItem[] // 轮播元素数据
}
