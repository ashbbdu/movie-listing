import "./App.css";
import { Suspense } from "react";
import { useRecoilState } from "recoil";
import { todosAtomFamily, productsSelector } from "./atoms";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      {/* <Todo id={1}/>
    <Todo id={2} /> */}

      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<MyApp />} />
        </Routes>
      </Suspense>
    </>
  );
}

const MyApp = () => {
  const navigate = useNavigate();
  const products = useRecoilState(productsSelector);

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products[0].map((product) => {
        return (
          <div
            onClick={() => handleNavigate(product.id)}
            key={product.id}
            style={{ cursor: "pointer" }}
          >
            <img
              src={product.image}
              alt="product-img"
              width={250}
              height={200}
            />
            <h4>{product.catergory}</h4>
            <h4>{product.description}</h4>
            <h4>{product.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
