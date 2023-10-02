import BreakingNews from "../BreakingNews/BreakingNews";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <BreakingNews />
      <Navbar />
    </header>
  );
};

export default Header;
