import "./App.css";
import PostForm from "./components/PostForm";
// import Form from "./components/Form";
// import Table from "./components/Table";
// import Ref from "./components/Ref";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import Counter from "./components/Counter";
// import User from "./components/User";
// import UserList from "./components/UserList";
function App() {
  return (
    <div className='App'>
      {/* <Form />
      <Table />
      <Ref />
      <ComponentA />
      <ComponentB />
      <Counter />
      <User
        name='sonam'
        render={(isLoggedIn) => (isLoggedIn ? "sonam" : "Guest")}
      /> */}
      {/* <UserList /> */}
      <PostForm />
    </div>
  );
}

export default App;
