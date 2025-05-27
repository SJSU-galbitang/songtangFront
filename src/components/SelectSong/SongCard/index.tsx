import styled from '@emotion/styled';
import color from '@/styles/color';

type SongCardProps = {
    title: string;
    id: string;
    length: string;
  };
  
  const SongCard = ({ id, title,length }: SongCardProps) => {
    const img = `https://cdn2.suno.ai/image_${id}.jpeg`
    
    return (
    <CardList>
        <Img src={img} />
        <TextWrapper>
          <Title>{title}</Title>
          <Length>{length}</Length>
        </TextWrapper>
    </CardList>
    );
  };

  const CardList = styled.div`
    width: 80%;
    height: 100%;
    background-color: ${color.gray04};
    border-radius: 8px;
    display: flex;
    align-items: flex-start;
    padding: 10px;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  `;
  
  const Img = styled.img`
    width: 64px;
    height: 64px;
    background-color: ${color.white};
    `;

  const TextWrapper = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
  `;
  
const Title = styled.h2`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  color: ${color.white};
  margin: 0;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 100%;
  white-space: nowrap;
  
`;

const Length = styled.h3`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  gap:2px;
  color: ${color.white};
`;
  export default SongCard;