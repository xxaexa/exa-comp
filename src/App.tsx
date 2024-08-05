import {
  About,
  Client,
  Product,
  Video,
  Review,
  Article,
  Footer,
  Header,
  Carousel,
} from "./components";
import { useState } from "react";
import Modal from "./components/modal/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="">
        <Header />
        <Carousel />
      </div>

      <About />
      <Client />
      <Product />
      <Video />
      <Review />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
