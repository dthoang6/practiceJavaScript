function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    }
    else if (startNum == endNum) {
      return [startNum];
    }
    else {
      const rangeArray = rangeOfNumbers(startNum, endNum - 1);
      rangeArray.push(endNum);
      return rangeArray;
    }
  };
  
  console.log(rangeOfNumbers(1, 0));