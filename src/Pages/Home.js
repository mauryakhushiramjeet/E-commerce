import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/ProductLists/Component/ProductList";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
}
export default Home;
