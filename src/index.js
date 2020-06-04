
import { parse } from 'url'; //静态导入
console.log('parse', parse);

//动态导入
import('../node_modules/lodash/index.js').then(module => {
    const arr = [1, 2, 3];
    const getStr = module.join(arr, '---');
    const ele = document.createElement('div');
    ele.innerHTML = getStr;
    document.body.appendChild(ele);
})