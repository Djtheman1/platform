import React from 'react';
import styled from 'styled-components';
import { SlideSection } from '../../components/Slider';
import { GAMES } from '../../games';
import { GameCard } from './GameCard';
import { WelcomeBanner } from './WelcomeBanner';

// ========== Styled Components ==========

const StyledSliderItem = styled.div`
  width: 160px;
  display: flex;
  padding: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

const StyledGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 2rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media (min-width: 600px) {
    padding: 2rem;
  }
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 3rem 0 1rem;
  font-weight: 600;
  color: #333;
`;

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
`;

// ========== Components ==========

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <StyledSliderItem key={game.id}>
          <GameCard game={game} />
        </StyledSliderItem>
      ))}
    </SlideSection>
  );
}

export function GameGrid() {
  return (
    <StyledGrid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </StyledGrid>
  );
}

// ========== Page ==========

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <SectionWrapper>
        <WelcomeBanner />
        <StyledHeading>Explore Our Games</StyledHeading>
        <GameGrid />
      </SectionWrapper>
    </DashboardWrapper>
  );
}
