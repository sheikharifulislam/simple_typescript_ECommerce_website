import { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import HeaderSlider from "views/components/custom/HeaderSlider";
import AllProducts from "views/components/home/AllProducts";

const Home = () => {
    const { products, setProducts } = useState<[] | any[]>([]);

    useEffect(() => {
        ProductService.getAllProducts().then((data) => {
            setProducts(data);
        });
    }, [setProducts]);

    return (
        <main>
            <div>
                <HeaderSlider />;
            </div>
            <div className="all_products">
                <AllProducts products={products} />
            </div>
        </main>
    );
};

export default Home;