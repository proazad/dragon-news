import RightSidebar from "../../Components/Asides/RightSidebar/RightSidebar";
import LeftSidebar from "../../Components/Asides/LeftSidebar/LeftSidebar";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <LeftSidebar></LeftSidebar>
        <MainContent />
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default Home;
