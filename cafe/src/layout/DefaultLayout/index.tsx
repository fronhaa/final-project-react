import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
export function DefaultLayout() {
  return (
    <div>
      <Header />
      <LayoutContainer>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Outlet />
      </LayoutContainer>
    </div>
  );
}
