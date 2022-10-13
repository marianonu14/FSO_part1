import { useState } from 'react';

const votes = [0, 0, 0, 0, 0, 0];

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const App = () => {
  const [selected, setSelected] = useState(0);

  const changeAnecdote = () => {
    const number = Math.random() * (anecdotes.length - 1);
    setSelected(parseInt(number));
  };

  const changeVotes = () => {
    votes[selected] += 1;
  };

  const maxNumber = () => {
    const index = votes.findIndex(number => number === Math.max(...votes))
    return index;
  }

  return (
    <>
      <h2>Anecdote with most Votes</h2>
      {anecdotes[selected]}
      <div>
        <button onClick={changeAnecdote}>Change Anecdote</button>
        <button onClick={changeVotes}>Vote</button>
        <p>{votes[selected]}</p>
      </div>
      <h2>Anecdote with most Votes</h2>
      {anecdotes[maxNumber()]}
      {}
    </>
  );
};

export default App;
