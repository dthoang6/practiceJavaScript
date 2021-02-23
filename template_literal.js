/**Use template literal syntax with backticks to create an array of list element strings. */
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        //using backticks and ${variable} to create string without string concatenation
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);