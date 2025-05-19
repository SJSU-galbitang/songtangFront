import color from '@/styles/color';
import React from 'react';
import styled from 'styled-components';


type SongCardProps = {
  imageUrl: string;
  title: string;
  id:string;
  length: string;
};



const SongCard: React.FC<SongCardProps> = ({ imageUrl, title, length }) => {
  return (
    <Card>
      <Thumbnail src={imageUrl} alt={title} />
      <SongInfo>
        <Title>{title}</Title>
        <Duration>{length}</Duration>
      </SongInfo>
    </Card>
  );
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
  width: 72px;
  height: 72px;
  border-radius: 8px;
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

export default SongCard;
