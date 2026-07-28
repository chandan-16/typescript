interface UserCardProps {
    name: string;
    age: number;
    city: string;
}

export const UserCard = ({name, age, city}: UserCardProps) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{city}</p>
    </div>
  )
}

