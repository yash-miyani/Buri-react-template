import { useEffect, useState } from "react";
import { styled } from "styled-components";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn {
    font-size: 1.8rem;
    font-weight: bold;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background-color: #d6ad86;
    box-shadow: 0 0 5px rgba(204, 204, 204, 0.8);
    border-radius: 50%;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    transition: all 0.5s;
  }

  .top-btn:hover {
    background-color: #ffb830;
  }
  .bi {
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
  @keyframes gototop {
    0% {
      transform: translateY(-0.2rem);
    }
    100% {
      transform: translateY(0.5rem);
    }
  }
`;

export default GoToTop;
