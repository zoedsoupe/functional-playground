let vs = [1, 2, 3, 4]

// [| 1, 2, 3, 4 |]
let xs = list{1, 2, 3, 4}

let map = (l, f) => {
  switch(l) {
  | list{} => list{}
  | list{x, ...tail} => list{f(x), map(tail, f)}
  }
}
