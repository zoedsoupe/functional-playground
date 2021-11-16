// HOF
// Higher Order Functions


// Funtor -> Funtor
// identidade, dominio e seus contradominios
const id = (a) => a

const xs = [1, 2, 3, 4]
console.log(xs)

// imperative way
let i = 0
for(x of xs) {
  xs[i] = x * 2
  i++
}
console.log(xs)

// declarative way
const ys = [1, 2, 3, 4]
ys.map((x) => x * 2)

const map = (vs, f) => {
  const xs = []

  let i = 0
  for(v of vs) {
    xs[i] = f(v)
    i++
  }

  return xs
}
const vs = [2, 3, 4]
console.log(map(vs, (v) => v + 1))
