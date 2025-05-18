import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';


type SongCardProps = {
  imageUrl: string;
  title: string;
  duration: string;
};

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;    
  padding: 12px;
  background-color: ${color.gray04};
  border-radius: 8px;
  padding-bottom: 40px;
  width: 257px;
  height: 84px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Thumbnail = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Duration = styled.span`
  font-size: 14px;
  color: #aaa;
`;

const SongCard = ({ imageUrl, title, duration }: SongCardProps) => (
  <Card>
    <Thumbnail src={imageUrl} alt={title} />
    <SongInfo>
      <Title>{title}</Title>
      <Duration>{duration}</Duration>
    </SongInfo>
  </Card>
);

export default SongCard;
