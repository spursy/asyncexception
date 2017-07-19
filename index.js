'use strict';

// create a Map object
const stack = new Map();
stack.set(-1, '');
let currentUid = -1;

function init(id, type, triggerId, resource) {
    const localStack = (new Error()).stack.split('\n').slice(1).join('\n');
    const extraStack = stack.get(triggerId || currentUid);
    // splice error message from different callback functions. 
    stack.set(id, localStack + '\n' + extraStack);
}

function before(uid) {
    currentUid = uid;
}

function after(uid) {
    currentUid = -1;
}

//release Map object
function destroy(uid) {
    stack.delete(uid);
}

const async_hooks = require('async_hooks');
const hook = async_hooks.createHook({init, before, after, destroy});
hook.enable();

exports.getAsyncException = function() {
    return stack.get(currentUid); 
} 