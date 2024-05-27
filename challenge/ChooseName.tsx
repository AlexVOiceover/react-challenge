import { useState } from 'react';

function ChooseName() {
    const [name, setName] = useState("");
  
    function updateName(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        username: { value: string };
      };
      setName(target.username.value);
    }
  
    return (
      <form onSubmit={updateName}>
        <input name="username" aria-label="Username" />
        <button>Update name</button>
        <output>Your name is: {name}</output>
      </form>
    );
}

export default ChooseName