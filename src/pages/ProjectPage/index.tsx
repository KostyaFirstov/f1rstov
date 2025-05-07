import React from 'react';
import styles from './ProjectPage.module.css';
import HeroSection from '../../components/HeroSection';
import TextBlock from '../../components/TextBlock';
import ImageBlock from '../../components/ImageBlock';
import ListBlock, { IList } from '../../components/ListBlock';
import NextProject from './NextProject';
import ProjectPhones from './ProjectPhones';
import ProjectSlides from './ProjectSlides';
import Transition from '../../transition';
import useLocoScroll from '../../hooks/useLocoScroll';
import usePageTitle from '../../hooks/usePageTitle';

interface IProjectPage {
  id: string;
  name: string;
  desc: string;
  about: React.ReactNode;
  reels: string;
  link: string;
  details: IList;
  imageBlock: string;
  slidesImages: string[];
  phonesImages: string[];
  isHeroImg?: boolean;
}

const ProjectPage: React.FC<IProjectPage> = ({
  id,
  name,
  desc,
  about,
  details,
  link,
  reels,
  imageBlock,
  phonesImages,
  slidesImages,
  isHeroImg,
}) => {
  usePageTitle(name);
  useLocoScroll();

  return (
    <Transition>
      <div className={styles.root}>
        <HeroSection
          title={name}
          main="third"
          video={reels}
          isHeroImg={isHeroImg}
        />
        <TextBlock
          text={desc}
          title={about}
          links={[{ path: link, name: 'Смотреть сайт', isNext: true }]}
        />
        <ImageBlock src={imageBlock} alt={name} />
        <ListBlock desc="Детали проекта" list={details} />
        <ProjectSlides images={slidesImages} />
        <ProjectPhones images={phonesImages} />
        <NextProject id={+id} />
      </div>
    </Transition>
  );
};

export default ProjectPage;
