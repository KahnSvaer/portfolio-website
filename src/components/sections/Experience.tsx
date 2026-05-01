import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../constants/theme';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: ${theme.spacing.lg} 0;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    width: 95%;
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.accent};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin-top: ${theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: 125px;
    top: 0;
    bottom: 0;
    width: 5px;
    background: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Date = styled.div`
  position: absolute;
  left: 0;
  top: 25px;

  width: 100px;
  text-align: right;
  font-size: 0.9rem;
  color: ${theme.colors.textLight};
  opacity: 0.8;
`;

const Dot = styled.div`
  position: absolute;
  left: 120px; 
  top: 25px;

  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  z-index: 1;

  box-shadow: 0 0 0 4px ${theme.colors.glass.background};
`;

const Card = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;

  width: 85vw;         
  max-width: 1200px;    

  display: flex;
  flex-direction: column;

  position: relative;
  left: 50%;            
  transform: translateX(-50%);

  padding: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }

  &:hover {
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const Role = styled.h3`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  margin-bottom: ${theme.spacing.xs};
  font-weight: 600;
`;

const Company = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.sm};
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const experienceData = [
  {
    id: 1,
    date: "May 2025",
    role: "Research Intern (AR + GenAI + 3D)",
    company: "Arishna IoT Solutions x TU Graz x Catrobat",
    description:
      "Worked on AR-driven 3D generation pipelines and contributed to real-time systems combining generative AI and spatial computing.",
  },
  {
    id: 2,
    date: "2025",
    role: "GSoC Contributor",
    company: "Catrobat",
    description:
      "Built scalable 3D generation workflows and optimized pipelines for AR/VR applications.",
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // match Skills EXACTLY
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ExperienceSection
      id="experience"
      role="region"
      aria-label="Work Experience Timeline"
    >
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Experience
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline role="list">
            {experienceData.map((exp) => (
              <TimelineItem
                key={exp.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`exp-role-${exp.id}`}
              >
                <Date aria-label={`Date: ${exp.date}`}>
                  {exp.date}
                </Date>

                <Dot aria-hidden="true" />

                <Card role="article">
                  <Role id={`exp-role-${exp.id}`}>
                    {exp.role}
                  </Role>
                  <Company>{exp.company}</Company>
                  <Description>{exp.description}</Description>
                </Card>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;