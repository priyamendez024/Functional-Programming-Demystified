-- Chapter 13: Error Handling and the Either Monad in Haskell
-- Using Either monad for error handling

data Either a b = Left a | Right b

safeDivide :: Int -> Int -> Either String Int
safeDivide _ 0 = Left "Division by zero"
safeDivide x y = Right (x `div` y)

main :: IO ()
main = do
  print (safeDivide 10 2)  -- Right 5
  print (safeDivide 10 0)  -- Left "Division by zero"
