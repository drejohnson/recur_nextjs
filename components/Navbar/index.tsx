import Link from "next/link";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <header className={style.navbar}>
      <div className={style.logo}>
        <Link href="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <nav className={style.navigation}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
