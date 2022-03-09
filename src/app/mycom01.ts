
import { Component } from "@angular/core";

//组件 = 模板 + 脚本 + 样式

//装饰器--用于指定calss的用途 本质：函数
@Component({
    template: '<h2>我的组件01</h2>',
    selector: '.mycom01'
})
export class MyComponent01 {

}