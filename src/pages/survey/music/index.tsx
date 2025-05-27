/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import Logo from '../../../assets/images/SongTangTextLogo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SurveyMelody from '@/components/melody';
import SurveyLyric from '@/components/lyric';
import { useState } from 'react';
import { useCreateSong } from "@/hooks/useSurvey.ts";

const breakpoints = { mobile: '768px' };

export default function SurveyMusic() {
    const location = useLocation();
    const navigate = useNavigate();
    let { melodies = [], lyrics = [] } = location.state || {};
    lyrics = [
        "820ae873b56b18146eb12b495dbfd06e",
        "10dec08a91f56df01e31cf548c3b0512",
        "dca6697bee49ef816af4106c3c3f251f",
        "0631effe339203dab0a3954041852f98",
        "a0b86564364114f3a9561563bc9a8a84",
        "e5b453613efa553313a5b2152f85d786",
        "9a2b7762a1448394da8846ecdc71e134",
        "273d1bc4c8893cf9bb2559f6ada60356",
        "25aafc7a344c4c314578e27d8c556dbe",
        "10dec08a91f56df01e31cf548c3b0512"
    ];

    const { mutate: createSong } = useCreateSong();

    const [step, setStep] = useState<'melody' | 'lyric'>('melody');
    const [melodyIndex, setMelodyIndex] = useState(0);
    const [lyricIndex, setLyricIndex] = useState(0);
    const [selectedMelodyIds, setSelectedMelodyIds] = useState<string[]>([]);
    const [selectedLyricIds, setSelectedLyricIds] = useState<string[]>([]);

    const chunkSize = 2;
    const currentMelodies = melodies.slice(melodyIndex, melodyIndex + chunkSize);
    const currentLyrics = lyrics.slice(lyricIndex, lyricIndex + chunkSize);

    const handleMelodySelect = (id: string) => {
        setSelectedMelodyIds(prev => [...prev, id]);

        if (melodyIndex + chunkSize >= melodies.length) {
            setStep('lyric');
        } else {
            setMelodyIndex(prev => prev + chunkSize);
        }
    };

    const handleLyricSelect = (id: string) => {
        console.log('selected lyric:', id);
        const newSelected = [...selectedLyricIds, id];
        setSelectedLyricIds(newSelected);

        if (lyricIndex + chunkSize >= lyrics.length) {
            console.log("멜로디선택:" + selectedMelodyIds, "가사선택" + newSelected);
            createSong(
                {
                    melodies: selectedMelodyIds,
                    lyrics: newSelected,
                },
                {
                    onSuccess: (song) => {
                        navigate('/result', {
                            state: {
                                title: song.title,
                                id: song.id,
                                total: song.length
                            },
                        });
                    }
                }
            );
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
                    <SurveyLyric lyrics={currentLyrics} onLyricSelect={handleLyricSelect} />
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