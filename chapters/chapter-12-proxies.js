// Proxies: surrogate object that is used in place of another object (target). The proxy virtualizes the 'target' so the proxy and the target,
// appear to be functionally the same object. The low-level object operations are intercepted using 'traps'.

// Reflect API, is a collection of methods that provide the default behavior for the same low-level operations that Proxies can override.

// Creating a Simple Proxy
let targetObject = {};
 
let proxy = new Proxy(targetObject, {});
proxy.name = "Proxy";

console.log(proxy.name);        // Proxy
console.log(targetObject.name); // Proxy

targetObject.name = "Target";

console.log(proxy.name);        // target
console.log(targetObject.name); // target

// proxy forwards all operations directly to targetObject