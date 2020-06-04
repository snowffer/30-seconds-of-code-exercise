
// 1. 返回值如果不是any，那么直接绑定到onClick事件上的时候，会报类型不匹配的错MouseEvent (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
// 2. this必须显式声明类型，不然会报错。放在函数第一个位置，作为一个“假”参数，不会影响其它入参。
//    两种写法：（1）this: Function (2) this: typeof final (3) 给方法定义一个类型，和final一样的，然后指给this

export const debounce = (fn: Function, ms: number): any | Function => {
    let timeoutId: any = null;
    return function final (this: typeof final,...args:[]): void {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.call(this, args);
        }, ms);
    }
}

export default debounce;
