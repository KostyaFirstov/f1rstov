import React from 'react';
import HeroSection from '../../components/HeroSection';
import TextBlock from '../../components/TextBlock';
import ImageBlock from '../../components/ImageBlock';
import ListBlock from '../../components/ListBlock';
import Transition from '../../transition';
import useLocoScroll from '../../hooks/useLocoScroll';
import usePageTitle from '../../hooks/usePageTitle';

const About = () => {
  usePageTitle('Обо мне');
  useLocoScroll();

  return (
    <Transition>
      <HeroSection
        title="ОБО МНЕ"
        main="second"
        video="../images/about/showreel.mp4"
      />
      <TextBlock
        text="В IT с 2019-го года, разработкой сайтов начал заниматься в 2021 г. Больше всего нравятся сайты с эффектными анимациями."
        title="
					<h2>
						Меня зовут <span>Константин Фирстов</span>, родился и живу
						в&nbsp;Москве
					</h2>
				"
        subText="15.09.2003"
      />
      <ListBlock
        desc="Мои навыки"
        list={[
          {
            desc: 'Дизайн:',
            str: 'Figma / Photoshop ',
          },
          {
            desc: 'Разработка:',
            str: 'Html / Css / Js / React / React Native / Next.JS / Typescript',
          },
          {
            desc: 'Анимация:',
            str: 'Gsap / Three.JS / FramerMotion',
          },
          {
            desc: 'Системы управления сайтом::',
            str: 'WordPress / Sanity / Самописные',
          },
        ]}
      />
    </Transition>
  );
};

export default About;
