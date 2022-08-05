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
    console.log(photos);
  return (
    <UserContext.Provider value={{photos}}>
        {props.children}
    </UserContext.Provider>
  );
}

export {AppContextProvider, UserContext};
