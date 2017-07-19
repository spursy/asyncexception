# asyncexction
catch async exception through async hook(node.js version is latter than V8.0.0).

**Installation**

>npm install asyncexception

**Example**

```
'use strict';
const index = require('./index');

function throwException() {
    setTimeout(function() {
        var err = new Error();
        console.log(index.getAsyncException());
    }, 100);    
}

throwException()
```
