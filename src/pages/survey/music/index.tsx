/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import Logo from '../../../assets/images/SongTangTextLogo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SurveyMelody from '@/components/melody/index';
import SurveyLyric  from '@/components/lyric/index';
import { useState, useEffect } from 'react';

const breakpoints = { mobile: '768px' };

export default function SurveyMusic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { melodies = [], lyrics = [] } = location.state || {};

    const [step, setStep] = useState<'melody' | 'lyric'>('melody');
    const [melodyIndex, setMelodyIndex] = useState(0);
    const [lyricIndex, setLyricIndex]   = useState(0);
    const [selectedMelodyIds, setSelectedMelodyIds] = useState<string[]>([]);
    const [selectedLyricIds, setSelectedLyricIds]   = useState<string[]>([]);

    const chunkSize = 2;
    const currentMelodies = melodies.slice(melodyIndex, melodyIndex + chunkSize);
    const currentLyrics    = lyrics.slice(lyricIndex, lyricIndex + chunkSize);
    console.log("currentLyrics: "+currentLyrics);

    // 디버깅용
    useEffect(() => {
        console.log('step:', step);
        console.log('melodyIndex:', melodyIndex, 'currentMelodies:', currentMelodies);
        console.log('lyricIndex:', lyricIndex, 'currentLyrics:', currentLyrics);
    }, [step, melodyIndex, lyricIndex]);

    const handleMelodySelect = (id: string) => {
        console.log('selected melody:', id);
        setSelectedMelodyIds(prev => [...prev, id]);

        if (melodyIndex + chunkSize >= melodies.length) {
            setStep('lyric');
        } else {
            setMelodyIndex(prev => prev + chunkSize);
        }
    };

    const handleLyricSelect = (id: string) => {
        console.log('selected lyric:', id);
        setSelectedLyricIds(prev => [...prev, id]);

        if (lyricIndex + chunkSize >= lyrics.length) {
            navigate('/result', {
                state: {
                    melodies: selectedMelodyIds,
                    lyrics:   selectedLyricIds,
                },
            });
        } else {
            setLyricIndex(prev => prev + chunkSize);
        }
    };

    return (
        <StyledTestSong>
            <InnerSort>
                <LogoSort>
                    <StyledLogo src={Logo} alt="SongTang logo" />
                </LogoSort>

                {step === 'melody' && currentMelodies.length > 0 && (
                    <SurveyMelody
                        melodies={currentMelodies}
                        onMelodySelect={handleMelodySelect}
                    />
                )}

                {step === 'lyric' && currentLyrics.length > 0 && (
                    <SurveyLyric lyrics={currentLyrics.map(l => l.text)} onComplete={handleLyricSelect} />
                )}
            </InnerSort>
        </StyledTestSong>
    );
}

const StyledTestSong = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color.gradient.background};
    padding: 2rem 1rem;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem 0.5rem;
        align-items: flex-start;
        justify-content: center;
    }
`;

const InnerSort = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
    justify-content: flex-start;
    gap: 4vh;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.mobile}) {
        gap: 3vh;
        width: 95%;
    }
`;

const LogoSort = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const StyledLogo = styled.img`
    width: 30%;
    max-width: 300px;
    height: auto;
    margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        width: 50%;
        max-width: 100px;
    }
`;