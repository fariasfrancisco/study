'use strict'

function URLify (string) {
  return string.replace(/\s+/g, '%20')
}

function test () {
  const s1 = 'asd'
  const s2 = 'a s d,f'
  const s3 = 'a  s   d    fe '

  console.log(`${s1} => ${URLify(s1)}`)
  console.log(`${s2} => ${URLify(s2)}`)
  console.log(`${s3} => ${URLify(s3)}`)
}

test()
