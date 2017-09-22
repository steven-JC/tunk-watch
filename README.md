# 架构性组件：tunk-strict

数据传入store和从store取出的时候实现引用隔离，避免误操作引起非预期的数据变更

## Usage
````shell
npm install tunk-isolation
````
````javascript
import isolation from 'tunk-isolation'
tunk.use(isolation('deep'));
````
## Options : ['deep' | 'shallow' | 'none']  default:'deep'

#### deep
深克隆，隔离所有引用
```javascript 
JSON.parse(JSON.stringify(obj));
````
#### shallow
浅克隆，创建表层对象 
```javascript 
Object.assign({}, obj);
````
#### none
不克隆，无隔离，效率最高
 



 