-- Chapter 1: Introduction to Functional Programming (Haskell)
-- Haskell function to calculate the sum of squares of two numbers

sumOfSquares :: Int -> Int -> Int
sumOfSquares x y = x^2 + y^2

-- Example usage
main :: IO ()
main = print (sumOfSquares 3 4)
