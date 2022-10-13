import Part from './Part';

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((elem,id) => (
        <Part key={id} part={elem.name} exercises={elem.exercises} />
      ))}
    </>
  );
};

export default Content;
