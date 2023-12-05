import { useEffect, useState } from "react";
import "./App.css";
import ImageCarts from "./components/ImageCarts";
import Search from "./components/SerachImg";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  let urlApi = ` https://pixabay.com/api/?key=40309156-7785748847e3fc27fb0e97c2a&q=${term}&image_type=photo&pretty=true`;

  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Search searchText={(text) => setTerm(text)} />

      <div className="all-card">
        {isLoading ? (
          <h1>Loading Data...</h1>
        ) : (
          images.map((card) => <ImageCarts card={card} key={card.id} />)
        )}
      </div>
    </>
  );
}
