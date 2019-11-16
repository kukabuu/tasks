/*
Надо дописать функцию parallel. Остальной код был дан
*/

function parallel(funcArray, doneAll) {
  let result = [];

  const done = str => {
    result.unshift(str);
    if (result.length === funcArray.length) {
      doneAll(result);
    }
  };

  funcArray.forEach(func => func(done));
}

var a = function(done) {
  setTimeout(function() {
    done("result a");
  }, 300);
};

var b = function(done) {
  setTimeout(function() {
    done("result b");
  }, 200);
};

parallel([a, b], function(results) {
  console.log(results); // ['result a', 'result b']
});
