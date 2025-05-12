-- Chapter 17: Performance Optimization with Functional Programming
-- Haskell: Tail-recursive factorial function for performance optimization

factorial :: Integer -> Integer
factorial n = factorialTail n 1
  where
    factorialTail 0 acc = acc
    factorialTail n acc = factorialTail (n - 1) (n * acc)

main :: IO ()
main = print (factorial 5)
