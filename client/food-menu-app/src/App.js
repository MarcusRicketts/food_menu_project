// import "./App.css";
import CreateDish from "./components/createdish/CreateDish";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <Container>
      <Grid>
        <CreateDish />
      </Grid>
    </Container>
  );
}

export default App;
