import React, { useState } from "react";
import "./CreateDish.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { TextField, Button, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import NativeSelect from "@material-ui/core/NativeSelect";
import { MainContainer } from "../MainContainer";
import { Forms } from "../Forms";
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
    <MainContainer>
      <Forms onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="dishName"
          id="dishName"
          label="Dish Name"
          variant="filled"
          {...register("dishName")}
          placeholder="Type here to add name of dish"
        />
        <label>
          <Typography>Type at least one character for dish's name</Typography>
        </label>
        <br />
        <TextField
          name="description"
          id="desciption"
          label="Dish Description"
          variant="filled"
          multiline="true"
          {...register("description")}
          placeholder="Type here to add name of dish"
        />
        <label>
          <Typography>
            Type at least one character for dish's description
          </Typography>
        </label>
        <br />
        <label>
          <Typography variant="h5"> Dish Catergory</Typography>
        </label>
        <NativeSelect>
          <option value="Appetizer"> Appetizer</option>
          <option value="Dessert">Dessert</option>
          <option Value="Entree">Entree</option>
        </NativeSelect>
        <label>
          <Typography>Select one to add a catergory for dish</Typography>
        </label>
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
        <br />
        <TextField
          name="Price"
          id="price"
          label="Dish Price"
          variant="filled"
          {...register("price")}
          placeholder="Type here to add price of dish"
        />
        <label>
          <Typography>Type a number for dish's price</Typography>
        </label>

        {/* {formState.errors.dishName && (
        <p>Yo, your dish needs a name with at least one letter</p>
      )} */}
        {/* {showIng && <p>show ing list</p>} */}

        {/* <button>submit</button> */}
      </Forms>
    </MainContainer>
  );
}

export default CreateDish;
