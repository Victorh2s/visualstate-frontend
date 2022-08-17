import { Heading } from '../Heading';
import { SectionBackgroundSvg } from '../SectionBackgroundSvg';
import { motion } from 'framer-motion';
import * as Frame from '../Animation/animation';
import { useState } from 'react';
import * as Styled from './styles';

export const GridTwoColumns = () => {
  const [Yvideo, SetYvideo] = useState(0);
  const [Ytext, SetYtext] = useState(0);
  if (Yvideo > 100) {
    SetYvideo(0);
    SetYtext(0);
  }
  if (Yvideo <= 100) {
    setInterval(() => {
      SetYvideo(Yvideo + 50);
      SetYtext(Ytext + 35);
    }, 6000);
  }

  return (
    <SectionBackgroundSvg>
      <Styled.Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={Frame.VisibleOpacity}
        >
          <Styled.TextContainer>
            <Styled.Ytext translatey={Ytext}>
              <Styled.HeadingHeight>
                <Heading uppercase colorDark={false} as="h2" size="medium">
                  A melhor plataforma de fotos do mundo
                </Heading>
              </Styled.HeadingHeight>
              <Styled.HeadingHeight>
                <Heading uppercase colorDark={false} as="h2" size="medium">
                  Coloque suas recordações de maneira simples e fácil
                </Heading>
              </Styled.HeadingHeight>
              <Styled.HeadingHeight>
                <Heading uppercase colorDark={false} as="h2" size="medium">
                  Crie já sua conta e explore um mundo de opções
                </Heading>
              </Styled.HeadingHeight>
            </Styled.Ytext>
          </Styled.TextContainer>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={Frame.VisbleX}>
          <Styled.Carrousel>
            <Styled.Yvideo translatey={Yvideo}>
              <Styled.SourceContainer>
                <Styled.videos
                  src="/assets/uploads/video1.mp4"
                  aria-label="video1"
                  autoPlay
                  loop
                  muted
                />
              </Styled.SourceContainer>
              <Styled.SourceContainer>
                <Styled.videos
                  src="/assets/uploads/video2.mp4"
                  aria-label="video2"
                  autoPlay
                  loop
                  muted
                />
              </Styled.SourceContainer>
              <Styled.SourceContainer>
                <Styled.videos
                  src="/assets/uploads/video3.mp4"
                  aria-label="video3"
                  autoPlay
                  loop
                  muted
                />
              </Styled.SourceContainer>
            </Styled.Yvideo>
          </Styled.Carrousel>
        </motion.div>
      </Styled.Container>
    </SectionBackgroundSvg>
  );
};
