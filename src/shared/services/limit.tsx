import React from "react";

interface UserProps {
  name: string;
  fName: string;
  bName: string;
  age: number;
  roll: number;
  id: number;
  semester: string;
  subject: string;
  website: string;
  profession: string;
}

const User: React.FC<UserProps> = (props) => {
  const {
    name,
    fName,
    bName,
    age,
    roll,
    id,
    semester,
    subject,
    website,
    profession,
  } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{fName}</h2>
      <div>
        {age} <br /> {bName}
      </div>
      <div>
        {id} <br /> {website}
      </div>
      <div>
        {subject} <br /> {semester}
      </div>
      <div>
        {roll} <br /> {profession}
      </div>
    </div>
  );
};

export default User;
