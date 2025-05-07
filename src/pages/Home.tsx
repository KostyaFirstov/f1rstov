import React from 'react';
import HeroSection from '../components/HeroSection';
import TextBlock from '../components/TextBlock';
import ProjectsBlock from '../components/ProjectsBlock';
import ImageBlock from '../components/ImageBlock';
import ListBlock from '../components/ListBlock';
import Transition from '../transition';
import useLocoScroll from '../hooks/useLocoScroll';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('Разработчик & Дизайнер');
  useLocoScroll();

  return (
    <Transition>
      <HeroSection title="FIRSTOV" video="../images/showreel.mov" />
      <TextBlock
        text="Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту."
        title="<h2>
						UI/UX-<span>дизайнер</span> и Web-<span>разработчик</span>, создаю
						креативные сайты
					</h2>"
        links={[{ path: '/about', name: 'Обо мне' }]}
      />
      <ProjectsBlock />
      <TextBlock
        desc="Некоторые из клиентов:"
        list={['ViteksStone', 'Эмеральд', 'ПрофМед', 'RITM-X']}
        title="<h2>
						Более <span>40 созданных сайтов</span> с нуля, от&nbsp;идеи — до
						реализации, каждый из&nbsp;проектов <span>уникальный</span>
					</h2>"
        main={false}
      />
      <ImageBlock src="../images/40+.webp" alt="Более 40 созданных сайтов" />
      <ListBlock
        desc="Услуги"
        list={[
          {
            str: 'Дизайн-макет',
            text: 'Уникальный и удобный, созданный специально под вашу аудиторию и определённые задачи.',
            img: '../images/services/services01.png',
          },
          {
            str: 'Разработка сайта',
            text: 'Современная разработка, с учётом мобильных устройств, быстрой загрузки и эффектных анимаций.',
            img: '../images/services/services02.png',
          },
          {
            str: 'Мобильное приложение',
            text: 'Нативные приложения, созданные одновременно для Android и IOS. Воплатим любые ваши идеи!',
            img: '../images/services/services04.png',
          },
          {
            str: 'Поддержка и продвижение',
            text: 'Помогу с использованием сайта, настройкой рекламы, также мы можем договориться о постоянном ведении.',
            img: '../images/services/services03.png',
          },
        ]}
      />
    </Transition>
  );
};

export default Home;
