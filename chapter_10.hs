-- Chapter 10: Monads in Haskell: Demystified
-- Using Maybe monad in Haskell for safe error handling

safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

main :: IO ()
main = do
  print (safeDivide 10 2)  -- Just 5
  print (safeDivide 10 0)  -- Nothing
