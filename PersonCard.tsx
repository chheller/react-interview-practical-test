import React from "react";

interface IPerson {
  name: string;
  age: number;
}

const PersonCard = () => {
  const [person, setPerson] = React.useState<IPerson | null>(undefined);

  React.useEffect(async () => {
    const response = await fetch("https://api.example.com/people");
    const data = await response.json();
    setPerson(data);
  });

  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

React.render(<PersonCard />, document.getElementById("root"));
