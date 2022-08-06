import { useState, useEffect, createContext } from "react";
const UserContext = createContext();

function AppContextProvider(props) {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPhotos(data)
        });
    }, [])

    function toggleFavorite(id) {
        setPhotos(prevState => {
            return prevState.map(item => {
                return (item.id === id ? 
                { ...item,
                isFavorite: !item.isFavorite } :
                item)
            })
        })
    }
  return (
    <UserContext.Provider value={{photos, toggleFavorite}}>
        {props.children}
    </UserContext.Provider>
  );
}

export {AppContextProvider, UserContext};
