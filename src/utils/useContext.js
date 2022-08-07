import { useState, useEffect, createContext } from "react";
const UserContext = createContext();

function AppContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [ordering, setOrdering] = useState(false);


  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/ErikEgl/data-json/main/pic-some.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  function toggleCartItem(obj) {
    if (cartItems.some((e) => e.url === obj.url)) {
      setCartItems(prevCartItems => prevCartItems.filter(item => item.url !== obj.url));
      return;
    }

    setCartItems((prevObjArray) => [...prevObjArray, obj]);
  }
  function toggleFavorite(id) {
    setPhotos((prevState) => {
      return prevState.map((item) => {
        return item.id === id
          ? { ...item, isFavorite: !item.isFavorite }
          : item;
      });
    });
  }

  function placeOrder() {
    setOrdering(prevState => !prevState)
    setTimeout(() => {
      setCartItems([])
      setOrdering(prevState => !prevState)
      alert("Fake order is placed!");
    }, 3000)
  }
  return (
    <UserContext.Provider
      value={{ photos, toggleFavorite, toggleCartItem, cartItems, placeOrder, ordering }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };
