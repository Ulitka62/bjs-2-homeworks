function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); 
      let objectInCache = cache.find((item) => item.hash === hash); 
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.value); 
          return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args); 
      cache.push({hash, value: result}) ;
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }


function debounceDecoratorNew(func, ms) {
  let timerID;

  return function wrapper (...args) {
    if(timerID == undefined) {
      func.apply(null, this.args);
    }

    clearTimeout(timerID);


    timerID = setTimeout(() => {
      func.apply(null, this.args);
    }, ms);
  }
}

function debounceDecorator2(func) {
  let timerID;
  wrapper.count = 0;

  return function wrapper (...args) {
    if(timerID == undefined) {
      func.apply(null, this.args);
      wrapper.count++;
    }

    clearTimeout(timerID);


    timerID = setTimeout(() => {
      func.apply(null, this.args);
      wrapper.count++;
    }, ms);
  }
}
