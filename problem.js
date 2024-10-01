const firstRepeatingChar = (str) => {
  if (str.length < 2) {
    return -1;
  }

  const arr = str.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    const sub = arr.slice(i + 1);
    const c = arr[i];

    if (sub.includes(c)) {
      return c;
    }
    if (!sub.includes(c) && !sub.length) {
      return -1;
    }
  }
};

// console.log("repeating: ", firstRepeatingChar("syxlkywse"));

const firstNonRepeatingChar = (str) => {
  if (str.length < 2) {
    return -1;
  }

  const arr = str.split("");

  for (let i = 0; i < arr.length - 1; i++) {
    const sub = arr.slice(i + 1);
    const c = arr[i];
    console.log("sub: ", sub, c);

    if (!sub.includes(c)) {
      return i;
    }
    if (sub.includes(c) && !sub.length) {
      return -1;
    }
  }
};

console.log("not repeating: ", firstNonRepeatingChar("syxlkweys"));

//find the largest single number ins SQL:

("select MAX(num) as n from MyNumbers GROUP BY num HAVING COUNT(n) = 1");
