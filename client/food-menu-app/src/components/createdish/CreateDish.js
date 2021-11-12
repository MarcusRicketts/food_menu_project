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

  const removeIngredient = (value) => {
    const btnValue = value;
    console.log(btnValue);
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
              <label key={index} value={name}>
                <Button
                  onClick={() => {
                    let newIngArray = [...ingredientsArry];
                    const index = newIngArray.indexOf(name);
                    if (index !== -1) {
                      newIngArray.splice(index, 1);
                      setIngredientsArry(newIngArray);
                      console.log(ingredientsArry);
                    }
                  }}
                >
                  {name}
                  {<DeleteForeverIcon name={name} className="remove" />}
                </Button>
              </label>
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
