import React, { useState } from "react";
import "./CreateDish.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import {
  TextField,
  Button,
  Typography,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const schema = Joi.object({
  //   dishName: Joi.string().required(),
  //   ingredients: Joi.string().required(),
});

function CreateDish() {
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    resolver: joiResolver(schema),
  });
  const [showIng, setShowIng] = useState(false);
  const [ingredientsArry, setIngredientsArry] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const addIngredients = () => {
    const getIngValue = getValues("ingredients");
    setIngredientsArry([...ingredientsArry, getIngValue]);
    reset();
    console.log(getIngValue);
    console.log(ingredientsArry);
  };

  const removeIngredient = (e) => {
    console.log(e.target.name);
    // const filteredItems = array.filter((item) => item !== value);
    // console.log(filteredItems);
    // setIngredientsArry([...ingredientsArry, filteredItems]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input id="name" {...register("dishName")} />
      {formState.errors.dishName && (
        <p>Yo, your dish needs a name with at least one letter</p>
      )} */}
      <div>
        {ingredientsArry.length > 0 && (
          <div>
            <Typography variant="caption">Dish's ingredients</Typography>
            {ingredientsArry.map((name, index) => (
              <button
                type="button"
                name={name}
                className="ingredients-btn"
                onClick={removeIngredient}
                key={index}
              >
                {name}
                {/* {<DeleteForeverIcon name={name} className="remove" />} */}
              </button>
            ))}
          </div>
        )}

        <br></br>
        <TextField
          name="ingredient"
          id="ingredients"
          label="Ingredients"
          variant="filled"
          {...register("ingredients")}
          placeholder="Type here to add ingredients"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={addIngredients}
        >
          add ingredient
        </Button>
      </div>

      {/* {formState.errors.dishName && (
        <p>Yo, your dish needs a name with at least one letter</p>
      )} */}
      {/* {showIng && <p>show ing list</p>} */}

      {/* <button>submit</button> */}
    </form>
  );
}

export default CreateDish;
