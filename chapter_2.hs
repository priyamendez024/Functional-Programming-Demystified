-- Chapter 2: Haskell – The Pure Functional Language
-- Haskell function to calculate factorial using tail recursion

factorial :: Int -> Int
factorial n = factorialTail n 1
  where
    factorialTail 0 acc = acc
    factorialTail n acc = factorialTail (n - 1) (n * acc)

main :: IO ()
main = print (factorial 5)
