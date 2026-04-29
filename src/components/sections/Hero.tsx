import styled from '@emotion/styled';
import { theme } from '../../constants/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
import profileImage from '../../assets/profileImage.png';

const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedin })));
const FaEnvelope = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaEnvelope })));

const HeroSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    
    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: min(100%, 380px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15));

  @media (min-width: ${theme.breakpoints.md}) {
    width: 420px;
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.9;
  font-weight: 500;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};
  
  a {
    color: ${theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};
    
    &:hover {
      color: ${theme.colors.light};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
    
    a {
      font-size: 1.75rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="about" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <HeroLayout>
            <TextContent>
              <Title role="heading" aria-level={2}>
                Hi, I&apos;m Shivansh
              </Title>

              <Subtitle role="heading" aria-level={3}>
                Computer Vision Researcher
              </Subtitle>

              <Description>
                I work on Computer Vision, Spatial Intelligence, and Generative AI.
                I build systems that understand, generate, and interact with the
                real world—from 3D mesh generation and AR/VR applications to
                research-driven products. I care about solving hard problems and
                turning ambitious ideas into useful technology.
              </Description>

              <SocialLinks role="list" aria-label="Social media links">
                <a
                  href="https://github.com/kahnsvaer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  role="listitem"
                >
                  <Suspense
                    fallback={
                      <div style={{ width: '1.5rem', height: '1.5rem' }} />
                    }
                  >
                    <FaGithub aria-hidden="true" />
                  </Suspense>
                  <span className="sr-only">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/shivansh-pachnanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  role="listitem"
                >
                  <Suspense
                    fallback={
                      <div style={{ width: '1.5rem', height: '1.5rem' }} />
                    }
                  >
                    <FaLinkedin aria-hidden="true" />
                  </Suspense>
                  <span className="sr-only">LinkedIn</span>
                </a>

                <a
                  href="mailto:Shivansh.pachnanda.work@gmail.com"
                  aria-label="Send me an email"
                  role="listitem"
                >
                  <Suspense
                    fallback={
                      <div style={{ width: '1.5rem', height: '1.5rem' }} />
                    }
                  >
                    <FaEnvelope aria-hidden="true" />
                  </Suspense>
                  <span className="sr-only">Email</span>
                </a>
              </SocialLinks>
            </TextContent>

            <ImageWrapper>
              <ProfileImage
                src={profileImage}
                alt="Shivansh Pachnanda"
              />
            </ImageWrapper>
          </HeroLayout>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
