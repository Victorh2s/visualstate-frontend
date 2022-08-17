import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridImage = {
  background: boolean;
};

export const GridImage = ({ background = true }: GridImage) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <motion.div
          ref={ref}
          variants={{
            hidden: {
              y: 20,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0,
                type: 'tween',
                duration: 0,
              },
            },
          }}
          animate={controls}
          initial="hidden"
        >
          <Heading size="medium" uppercase colorDark={!background} as="h2">
            Armazene suas fotos em altíssima qualidade
            <TextComponent text="Aqui alguns exemplos" />
          </Heading>
        </motion.div>

        <Styled.Grid>
          <motion.div
            ref={ref}
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: 'tween',
                  duration: 0.2,
                },
              },
            }}
            animate={controls}
            initial="hidden"
          >
            <Styled.GridElement>
              <Styled.Image
                src="https://source.unsplash.com/random/1000x1000?r=1"
                alt="img1"
              />
            </Styled.GridElement>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: 'tween',
                  duration: 0.4,
                },
              },
            }}
            animate={controls}
            initial="hidden"
          >
            <Styled.GridElement>
              <Styled.Image
                src="https://source.unsplash.com/random/1000x1000?r=2"
                alt="img1"
              />
            </Styled.GridElement>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: 'tween',
                  duration: 0.6,
                },
              },
            }}
            animate={controls}
            initial="hidden"
          >
            <Styled.GridElement>
              <Styled.Image
                src="https://source.unsplash.com/random/1000x1000?r=3"
                alt="img1"
              />
            </Styled.GridElement>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: 'tween',
                  duration: 0.8,
                },
              },
            }}
            animate={controls}
            initial="hidden"
          >
            <Styled.GridElement>
              <Styled.Image
                src="https://source.unsplash.com/random/1000x1000?r=4"
                alt="img1"
              />
            </Styled.GridElement>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: 'tween',
                  duration: 1,
                },
              },
            }}
            animate={controls}
            initial="hidden"
          >
            <Styled.GridElement>
              <Styled.Image
                src="https://source.unsplash.com/random/1000x1000?r=5"
                alt="img1"
              />
            </Styled.GridElement>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  type: 'tween',
                  duration: 1.2,
                },
              },
            }}
            animate={controls}
            initial="hidden"
          >
            <Styled.GridElement>
              <Styled.Image
                src="https://source.unsplash.com/random/1000x1000?r=6"
                alt="img1"
              />
            </Styled.GridElement>
          </motion.div>
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
