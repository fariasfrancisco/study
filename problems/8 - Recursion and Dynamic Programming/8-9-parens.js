'use strict'

function printParenthesis (n) {
  const out = []

  function build (o, c, s) {
    if (c < o) build(o, c + 1, s + ')')
    if (o < n) build(o + 1, c, s + '(')
    if (c === n) out.push(s)
  }

  build(1, 0, '(')

  return out
}

function test () {
  console.log(1, printParenthesis(1))
  console.log(2, printParenthesis(2))
  console.log(3, printParenthesis(3))
  console.log(4, printParenthesis(4))
}

test()
