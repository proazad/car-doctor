import Header from "../../Components/Header/Header";
import error from "../../assets/icons/error.png";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="h-[500px] flex flex-col justify-center items-center">
          <img src={error} alt="" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
