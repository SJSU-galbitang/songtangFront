import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import SongCard from '../components/Modal/SongCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 305px;
  height: 100vh;
  background-color: ${color.black};
  color: white;
  overflow-x: hidden;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 132px;
`;

const StartButton = styled.button`
  background: ${color.gradient};
  color: ${color.white};
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  height: 78px;
  width: 487px;
  text-align: center;
  font-size: 32px;
`;

const Sidebar = styled.aside`
  padding: 1rem;
  background-color: ${color.black};
  width: 800px;
  border-left: 1px solid ${color.gray20};
  overflow-y: auto;
  width: 100%;
  padding-left:23px;
`;

const Input = styled.input`
  width: 257px;
  height: 40px;
  padding: 0.5rem;
  background: ${color.gray04};
  border: none;
  border-radius: 8px;
  color: ${color.white};
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 0.5rem;
  display: block;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const SongCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;  
`;

const HomePage = () => {

  return (
    <Container>
      <Main>
        <Title>Songtang</Title>
        <StartButton>Start Test</StartButton>
      </Main>
      <Sidebar>
        <Label htmlFor="searchSong">Find a song</Label>
        <Input placeholder="Enter song ID"/>
        <SectionTitle>Recent Creations</SectionTitle>
        <SongCardList>
        <SongCard
          imageUrl="" title="잔혹한 천사의 뽕짝" duration="03:11"/>
        <SongCard
          imageUrl="" title="잔혹한 천사의 뽕짝1" duration="02:11"/>
         <SongCard
          imageUrl="" title="잔혹한 천사의 뽕짝2" duration="3:11"/>
          </SongCardList>
      </Sidebar>
    </Container>
  );
};

export default HomePage;
