# Chapter 5: Working with Elixir’s Concurrency Model
# Elixir: Basic concurrent server using GenServer

defmodule TodoServer do
  use GenServer

  def start_link(initial_state) do
    GenServer.start_link(__MODULE__, initial_state, name: __MODULE__)
  end

  def init(state) do
    {:ok, state}
  end

  def handle_cast({:add_todo, todo}, state) do
    {:noreply, [todo | state]}
  end

  def handle_cast({:remove_todo, todo}, state) do
    {:noreply, List.delete(state, todo)}
  end
end

# Starting the GenServer
{:ok, _pid} = TodoServer.start_link([])

# Adding a to-do
GenServer.cast(TodoServer, {:add_todo, "Learn Elixir"})
