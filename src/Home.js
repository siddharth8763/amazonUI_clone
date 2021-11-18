import React from "react";
import "./Home.css";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61yYX4j5gtL._SX3000_.jpg"
          alt="mob"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Jagyanseni By Pratibha Ray"
            price={199}
            image={
              "https://m.media-amazon.com/images/I/61BzW78W96L._AC_UY218_.jpg"
            }
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={2045}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit watch"
            price={7800}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            }
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3599}
            image={
              "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            }
            rating={4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={51800}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            }
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Macbook Pro 2021"
            price={178000}
            image={
              "https://m.media-amazon.com/images/I/31jA5LDJdoL._AC_SY200_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};
