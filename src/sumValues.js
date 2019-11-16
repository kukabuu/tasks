//Найти сумму всех values

let data = {
  value: 4,
  next: [
    {
      value: 3,
      next: [
        {
          value: 5,
          next: null
        },
        {
          value: 6,
          next: null
        }
      ]
    },
    {
      value: 2,
      next: [
        {
          value: 2,
          next: null
        },
        {
          value: 3,
          next: [
            {
              value: 7,
              next: null
            },
            {
              value: 8,
              next: null
            }
          ]
        }
      ]
    }
  ]
};

function sumValues(node) {
  let sum = 0;

  function recurseSum(node) {
    sum += node.value;

    if (node.next !== null) {
      for (let item of node.next) {
        recurseSum(item);
      }
    }
  }
  recurseSum(node);
  return sum;
}

console.log(sumValues(data)); //40

