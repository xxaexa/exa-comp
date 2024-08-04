import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-10 bg-white w-full">
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-col justify-center">
        <h2 className="text-center font-extrabold text-xl my-4">EXA COMP</h2>
        <div className="my-4 flex flex-row gap-8 justify-center">
          <p>Promo</p>
          <p>Profile</p>
          <p>Client</p>
          <p>Product</p>
          <p>Review</p>
          <p>Article</p>
          <p>Footer</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <h2 className="font-extrabold text-xl">EXA COMP</h2>
        <button onClick={handleMenuToggle} className="text-2xl">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.  75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-20 flex flex-col items-center`}
      >
        <button
          onClick={handleMenuToggle}
          className="absolute top-4 right-4 text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="my-4 flex flex-col gap-4">
          <p>Promo</p>
          <p>Profile</p>
          <p>Client</p>
          <p>Product</p>
          <p>Review</p>
          <p>Article</p>
          <p>Footer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
