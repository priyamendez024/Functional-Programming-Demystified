-- Chapter 3: Mastering Functions in Haskell
-- Higher-order function example: doubling a list of numbers

doubleList :: [Int] -> [Int]
doubleList xs = map (*2) xs

main :: IO ()
main = print (doubleList [1, 2, 3, 4, 5])
