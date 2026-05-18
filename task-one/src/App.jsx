import Greeting from "./Greeting";
import Message from "./Message";
import Product from "./Product";
import UserCard from "./UserCard";
import Book from "./Book";
import Counter from "./Counter";
import Fruit from "./Fruit";
import Student from "./Student";

function App() {
  return (
    <div>
      <Greeting name="Binta" />
      <Message text="Hello, world!" />
      <Product title="Laptop" price="$999" />
      <UserCard name="Alice" role="Developer" />
      <Book title="The Great Gatsby" author="F. Scott Fitzgerald" year="1925" />
      <Book title="The Great Gatsby" author="F. Scott Fitzgerald" year="1925" />
      <Counter/>
      <Fruit/>
      <Student/>
    </div>
  );
}

export default App;