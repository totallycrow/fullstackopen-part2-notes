import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const onFilterChange = (event) => setFilter(event.target.value);

  const addRecord = (event) => {
    event.preventDefault();

    const newRecord = { name: newName, number: newNumber };

    persons.find((element) => element.name === newRecord.name)
      ? alert(`${newRecord.name} is already in the phonebook`)
      : setPersons(persons.concat(newRecord));

    setNewName("");
  };

  const recordsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().includes(filter.toUpperCase())
        );

  console.log(recordsToShow);

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter: <input value={filter} onChange={onFilterChange} />
      </div>

      <h2>Add New</h2>

      <form onSubmit={addRecord}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {recordsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
