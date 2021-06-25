//专门给main.js用(出口js)
import Carousel from './Carousel/index';
import CarItem from './Carousel/item'


//整个UI组件库的容器
let JsppUI = {};

JsppUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
}

export default JsppUI


//然后在main.js导入