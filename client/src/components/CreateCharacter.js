import React from 'react';
import useForm from '../utils/useForm';
import API from '../utils/API';

const CreateCharacter = props => {

  let state = props.state;
  const setState = props.setState;

  const characterSubmit = () => {
    console.log(values)
    values.currentHP = values.maxHP;
    API.createCharacter(values)
    setState(!state)
  }

  const { values, handleSubmit, handleChange } = useForm(
    {
      name: "",
      race: "",
      subrace: "",
      class: "",
      level: "",
      maxHP: "",
      currentHP: "",
      AC: "",
      initiative: "",
      perception: "",
    },
    characterSubmit
  )

  return(
    <React.Fragment>
    <form onSubmit={handleSubmit}>
    
      <label>
        What is your character's name?
      </label>
        <input
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={values.name}
          required
        />

      <label>
        What is your character's race?
      </label>
        <input
          name="race"
          type="text"
          placeholder="Enter race"
          onChange={handleChange}
          value={values.race}
          required
        />

      <label>
        If applicable, What is your character's subrace?
      </label>
        <input
          name="subrace"
          type="text"
          placeholder="Enter subrace"
          onChange={handleChange}
          value={values.subrace}
        />

      <label>
        What is your character's class?
      </label>
        <input
          name="class"
          type="text"
          placeholder="Enter class"
          onChange={handleChange}
          value={values.class}
          required
        />

      <label>
        What is your character's level?
      </label>
        <input
          name="level"
          type="text"
          placeholder="Enter level"
          onChange={handleChange}
          value={values.level}
          required
        />

      <label>
        What is your character's max HP?
      </label>
        <input
          name="maxHP"
          type="text"
          placeholder="Enter max HP"
          onChange={handleChange}
          value={values.maxHP}
          required
        />

      <label>
        What is your character's armor class?
      </label>
        <input
          name="AC"
          type="text"
          placeholder="Enter AC"
          onChange={handleChange}
          value={values.AC}
          required
        />

      <label>
        What is your character's initiative bonus?
      </label>
        <input
          name="initiative"
          type="text"
          placeholder="Enter initiative Bonus"
          onChange={handleChange}
          value={values.initiative}
          required
        />

      <label>
        What is your character's passive perception?
      </label>
        <input
          name="perception"
          type="text"
          placeholder="Enter perception bonus +10"
          onChange={handleChange}
          value={values.perception}
          required
        />
        <button type="submit">Create character</button>
    </form>
    <button onClick={()=> setState(!state)}>Choose a Character</button>
    </React.Fragment>
  )

}

export default CreateCharacter;