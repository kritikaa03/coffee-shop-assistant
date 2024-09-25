import React from "react";
import "./Menu.css";

const menuItems = [
  { name: "Espresso", description: "Rich and bold espresso shot.", price: "$3.00" },
  { name: "Latte", description: "Creamy espresso with steamed milk.", price: "$4.00" },
  { name: "Cappuccino", description: "Espresso topped with foamed milk.", price: "$4.50" },
  { name: "Americano", description: "Espresso diluted with hot water.", price: "$3.50" },
  { name: "Mocha", description: "Chocolatey espresso with steamed milk.", price: "$5.00" },
  { name: "Cold Brew", description: "Smooth and refreshing cold brew coffee.", price: "$4.00" },
  { name: "Flat White", description: "Velvety microfoam over a shot of espresso.", price: "$4.50" },
  { name: "Macchiato", description: "Espresso with a touch of foamed milk.", price: "$3.50" },
  { name: "Affogato", description: "A scoop of vanilla ice cream drowned in espresso.", price: "$5.00" },
  { name: "Chai Latte", description: "Spiced tea with steamed milk.", price: "$4.00" },
  { name: "Pastry", description: "Freshly baked croissant or pastry of the day.", price: "$2.50" },
  { name: "Cheesecake", description: "Creamy cheesecake with a buttery crust.", price: "$4.50" },
  { name: "Chocolate Cake", description: "Moist chocolate cake with rich frosting.", price: "$5.00" },
  { name: "Brownie", description: "Decadent chocolate brownie, rich and fudgy.", price: "$3.00" },
  { name: "Fruit Tart", description: "Buttery tart filled with pastry cream and fresh fruit.", price: "$4.50" },
  { name: "Matcha Latte", description: "Creamy matcha green tea with steamed milk.", price: "$4.50" },
  { name: "Iced Latte", description: "Chilled espresso mixed with milk over ice.", price: "$4.00" },
  { name: "Vanilla Bean Latte", description: "Espresso with vanilla syrup and steamed milk.", price: "$4.50" },
  { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor.", price: "$3.50" },
  { name: "Caramel Macchiato", description: "Espresso with caramel syrup and milk.", price: "$5.00" },
  { name: "Pistachio Cake", description: "Moist cake with pistachio flavor and frosting.", price: "$5.50" },
  { name: "Scone", description: "Freshly baked scone served with clotted cream.", price: "$3.00" },
  { name: "Lemon Tart", description: "Tangy lemon curd in a flaky pastry shell.", price: "$4.50" },
  { name: "Banana Bread", description: "Moist banana bread with walnuts.", price: "$3.50" },
  { name: "Red Velvet Cake", description: "Rich red velvet cake with cream cheese frosting.", price: "$5.50" },
  { name: "Almond Croissant", description: "Flaky croissant filled with almond cream.", price: "$3.50" },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <aside className="menu">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <strong>{item.name}</strong>: {item.description} <span className="item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Menu;
