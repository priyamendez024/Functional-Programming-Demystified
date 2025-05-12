# Chapter 11: Advanced Elixir: Working with Functional Data Structures
# Elixir: Implementing a functional linked list

defmodule LinkedList do
  defstruct value: nil, next: nil

  def new(value), do: %LinkedList{value: value}

  def prepend(list, value), do: %LinkedList{value: value, next: list}

  def display(nil), do: []
  def display(%LinkedList{value: value, next: next}), do: [value | display(next)]
end

# Example usage
list = LinkedList.new(1)
list = LinkedList.prepend(list, 2)
list = LinkedList.prepend(list, 3)

IO.inspect LinkedList.display(list)  # Output: [3, 2, 1]
