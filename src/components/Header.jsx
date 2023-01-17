import React, { useState, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@components/Menu";
import AppContext from "@context/AppContext";
import icono_menu from '@icons/icon_menu.svg'
import icon_shopping_cart from '@icons/icon_shopping_cart.svg'
import MyOrder from "@containers/MyOrder";
import logo from '@logos/logo_yard_sale.svg'
import styles from '@styles/header.module.scss'

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuOrders, setMenuOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMenuOrders = () => {
    setMenuOrders(!menuOrders);
  };

  return (
    <nav className={styles.nav}>
      <Image src={icono_menu} alt="menu" className={styles.menu} />
      <div className={styles["navbar-left"]}>
        <Link href="/">
        <Image src={logo} alt="logo" className={styles["nav-logo"]} />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          <li className={styles["navbar-email"]} onClick={handleMenu}>platzi@example.com</li>
          <li className={styles["navbar-shopping-cart"]} onClick={handleMenuOrders}>
            <Image src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {menu ? <Menu /> : null } 
      {menuOrders ? <MyOrder /> : null}
    </nav>
  );
};

export default Header;
