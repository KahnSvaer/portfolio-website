import styled from '@emotion/styled';
import { theme } from '../../constants/theme';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Button = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </Button>
  );
};

export default BackToTop;