// task - 1
function error() {
  try {
    throw new Error("this is an intentional error");
  } catch (error) {
    console.error(error.message);
  }
}
error();

// task - 2
function throwError(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("cant devide");
    }
    return numerator / denominator;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
console.log(throwError(10, 5));

// task - 3
function withFinally() {
  try {
    console.log("throw error");
    throw new Error("intentionally thrown");
    console.log("this will not execute");
  } catch (error) {
    console.log("in catch block error occured");
    console.error(error.message);
  } finally {
    console.log("finally block will execute always");
  }
}
withFinally();

// task - 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function throwCustomError() {
  try {
    throw new CustomError("This is a custom error!");
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error:", error.message);
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  } finally {
    console.log("Execution completed in the finally block.");
  }
}
throwCustomError();

// task - 5
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateString(str) {
  try {
    if (str.trim() === "") {
      throw new ValidationError("The string cannot be empty or whitespace!");
    }
    console.log("String is valid:", str);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message);
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  } finally {
    console.log("Validation completed.");
  }
}
validateString("Hello, world!");
validateString("  ");

// task - 6
function promise() {
  return new Promise((res, rej) => {
    let isTrue = Math.random() > 0.5;
    if (isTrue) {
      res("resolved");
    } else {
      rej("rejected");
    }
  });
}
promise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// task - 7
async function withAsyncPro() {
  try {
    let a = await new Promise((res, rej) => {
      let response = false;
      if (response) {
        res("async resolved");
      } else {
        rej("async rejected");
      }
    });
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}
withAsyncPro();

// task - 8
function withPromise() {
  return new Promise((res, rej) => {
    fetch("http://shwetangi.com")
      .then((response) => {
        if (response.ok) {
          res("resolved");
        } else {
          rej(`HTTP error! status: ${response.status}`);
        }
      })
      .catch((error) => {
        rej(error.message); // Pass the error message to the rejection
      });
  });
}
withPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// task - 9
async function fetchApi() {
  try {
    let res = await fetch("http://shwetangi.com");
    if (!res.ok) {
      throw new Error(`caught error ${res.status}`);
    }
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchApi();
