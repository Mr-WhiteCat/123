
import { Component } from "@angular/core";

//组件 = 模板 + 脚本 + 样式

//装饰器--用于指定calss的用途 本质：函数
@Component({
    template: '<h2>我的组件01</h2><hr>',
    selector: 'myc01'//当作什么来用 .XXX = class  [XXX] = 属性  XXX = 元素
})
export class MyComponent01 {

}
//1、创建组件
//2、在某个模块中注册组件class
//3、使用已经注册的组件