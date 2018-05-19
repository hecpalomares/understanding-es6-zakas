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
let target2 = {
  name: "target old"
};

// Validate properties using the 'set' Trap
// 'set' trap intercepts property write operations
let proxy2 = new Proxy(target2, {
  set(trapTarget, key, value, receiver) {
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError("Property must be a number");
      }
    }

    return Reflect.set(trapTarget, key, value, receiver);
  }
});

proxy2.count = 1;
console.log(proxy2.count);  // 1
console.log(target2.count); // 1

proxy2.name = "target new 2";    // 'name' property can be reassigned since it already exists on target object
console.log(proxy2.name);   // target 2
console.log(target2.name);  // target 2

// proxy2.anotherNameProp = "Random Property"; // TypeError: Property must be a number

// Object shape Validation using the 'get' Trap
// 'get' trap intercepts property read operations
let proxy3 = new Proxy({}, {
  get(trapTarget, key, receiver) {
    if(!(key in receiver)) {
      throw new TypeError("Property: " + key + " doesn't exist");
    }
    return Reflect.get(trapTarget, key, receiver);
  }
});

proxy3.name = "Proxy 3 Name";
console.log(proxy3.name);        // Proxy 3 Name
// console.log(proxy3.lastname);   // TypeError: Property: lastname doesn't exist