/*CommonJS模块实质是整体加载fs模块（即加载fs的所有方法），
生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。
这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，
导致完全没办法在编译时做“静态优化”。
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;*/
//输出的代码写法
/*export let A=123;

export function test(){
	console.log('test')
}

export class Hello{
	test(){
		console.log('class')
	}
}*/
//对应的
//import * as getmodule from './module'
//import { A as streamA, test, Hello } from './module'




/*let A=123;

function test(){
	console.log('test')
}

class Hello{
	test(){
		console.log('class')
	}
}
export { A as streamA, test as streamTest, Hello }*/
//对应的
//import * as getmodule from './module'
//import { streamA, streamTest, Hello as streamHello } from './module'



//模块的整体导出
/*let A=123;

function test(){
	console.log('test')
}

class Hello{
	test(){
		console.log('class')
	}
} 
export default { A, test, Hello }
export default 42
export default function(){}
*/
//对应
//import All from './module'


//import()函数
/*const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
  button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    
  })
});


if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}

Promise.all([
  import('./module.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module, module2, module3]) => {
   ···
});

async function main() {
  const myModule = await import('./myModule.js');
  const {export1, export2} = await import('./myModule.js');
  const [module, module2, module3] =
    await Promise.all([
      import('./module.js'),
      import('./module2.js'),
      import('./module3.js'),
    ]);
}
main();*/