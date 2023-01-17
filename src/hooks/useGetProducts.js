import { useEffect, useState } from "react";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            } finally {
                console.log("Products fetched");
            }
        })();
    }, [API]);
    
    return products ;
};

export default useGetProducts;