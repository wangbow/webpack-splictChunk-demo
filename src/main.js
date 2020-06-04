//动态导入
import('../node_modules/lodash/index.js').then(module => {
    console.log('main_module', module);
})
