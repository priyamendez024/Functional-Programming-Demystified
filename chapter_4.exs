# Chapter 4: Elixir – Concurrency with Functional Programming
# Elixir function to calculate the sum of squares of two numbers

defmodule Math do
  def sum_of_squares(x, y), do: x * x + y * y
end

# Example usage
IO.puts Math.sum_of_squares(3, 4)
