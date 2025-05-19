import styled from '@emotion/styled';
import color from '@/styles/color';

type SongCardProps = {
    title: string;
    id: string;
    length: string;
  };
  
  const SongCard = ({ title,length }: SongCardProps) => {
    return (
    <CardList>
        <Img></Img>
        <Title>{title}</Title>
        <Length>{length}</Length>
    </CardList>
    );
  };

  const CardList = styled.div`
    width:257px;
    height:84px;
    backgroud-color:${color.gray04};
    border-radius:8px;
  `;
  
  const Img = styled.div`
    width:64px;
    height:64px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    backgroud-color:${color.gray04};
    `;

  const Title = styled.h2`
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    display: -webkit-box;
    width: 160px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `;

  const Length = styled.h3`
    color: ${color.white};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  `;
  export default SongCard;