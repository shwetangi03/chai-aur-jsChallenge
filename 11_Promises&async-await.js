// task - 1
const a = new Promise((res, rej) => {
  setTimeout(() => {
    res("Heyy... shwetangi");
  }, 2000);
});
a.then((result) => {
  console.log(result);
});

// task - 2
const b = new Promise((res, rej) => {
  setTimeout(() => {
    rej("promise got rejected");
  }, 2000);
});
b.catch((error) => {
  console.log(error);
});

// task - 3
function pro1() {
  return new Promise((res, rej) => {
    const check = Math.random() > 0.5;
    setTimeout(() => {
      if (check) {
        res("response accepted 1");
      } else {
        rej("rejected 1");
      }
    }, 2000);
  });
}
function pro2() {
  return new Promise((res, rej) => {
    const check = Math.random() > 0.5;
    setTimeout(() => {
      if (check) {
        res("response accepted 2");
      } else {
        rej("rejected 2");
      }
    }, 1000);
  });
}
function pro3() {
  return new Promise((res, rej) => {
    const check = Math.random() > 0.5;
    setTimeout(() => {
      if (check) {
        res("response accepted 3");
      } else {
        rej("rejected 3");
      }
    }, 200);
  });
}
pro1()
  .then((result) => {
    console.log(result);
    return pro2();
  })
  .then((result) => {
    console.log(result);
    return pro3();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// task - 4
async function asynch() {
  try {
    const a = await new Promise((res, rej) => {
      setTimeout(() => {
        res("resolved");
      }, 1000);
    });
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}
asynch();

// task - 5
async function asynch1() {
  try {
    const a = await new Promise((res, rej) => {
      setTimeout(() => {
        rej("rejected");
      }, 1000);
    });
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}
asynch1();

// task - 6
function fetchData() {
  return new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          return rej(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        res(data);
      })
      .catch((err) => {
        rej(`Fetch error: ${err.message}`);
      });
  });
}
fetchData()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// task - 7
async function withAsync() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) {
      throw new Error("not able to fetch");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
withAsync();

// task - 8
function pro1() {
  return new Promise((res, rej) => {
    res("response 1");
  });
}
function pro2() {
  return new Promise((res, rej) => {
    res("response 2");
  });
}
function pro3() {
  return new Promise((res, rej) => {
    res("response 3");
  });
}
Promise.all([pro1(), pro2(), pro3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// task - 9
function pro1() {
  return new Promise((res, rej) => {
    res("response 1");
  });
}
function pro2() {
  return new Promise((res, rej) => {
    res("response 2");
  });
}
function pro3() {
  return new Promise((res, rej) => {
    res("response 3");
  });
}
Promise.race([pro1(), pro2(), pro3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
