import BreakingNews from "../BreakingNews/BreakingNews";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="px-2 lg:px-0">
      <HeaderTop />
      <BreakingNews />
      <Navbar />
    </header>
  );
};

export default Header;
