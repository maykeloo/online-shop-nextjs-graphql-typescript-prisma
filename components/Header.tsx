import { useEffect } from "react";
import { CartBar } from "./Cart/CartBar";
import { useCartContext } from "./Cart/CartContext";
import { HeaderFixed } from "./HeaderFixed";
import { NavLink } from "./Nav/Link";

export const Header = () => {
  const { cartItemsCount, refetchCartItems } = useCartContext()

  useEffect(() => {
    refetchCartItems()
  }, [refetchCartItems])

  return (
    <header className="mb-20">
      <nav>
        <div className="relative cursor-pointer before:absolute before:content=[''] before:-z-10 before:w-full before:h-[1px] before:bg-gray-300 before:left-0 before:bottom-0 flex justify-center gap-2 my-4 pt-4">
          <NavLink pathName="">Głowna</NavLink>
          <NavLink pathName="products/1">Produkty</NavLink>
          <NavLink pathName="about">O nas</NavLink>
          <CartBar count={cartItemsCount}/>
        </div>
      </nav>
      <HeaderFixed />
    </header>
  );
};