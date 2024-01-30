/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';

export default function CarouselBox(props) {
  var items = [
    {
      name: 'Iron Man',
      description: '아이언맨 슈트를 경험해 보세요',
      image:
        'https://github.com/ITK-SHIN/my-react-shop-2024/blob/main/public/bg_img/ironMan_bg.jpg?raw=true',
      height: '800',
      width: '100%',
      link: '/ironman',
    },
    {
      name: 'Spider Man',
      description: '스파이더맨 슈트와 함께 해보세요',
      image:
        'https://github.com/ITK-SHIN/my-react-shop-2024/blob/main/public/bg_img/spider_bg.jpg?raw=true',
      height: '800',
      width: '100%',
      link: './spiderman',
    },
    {
      name: 'Captain America',
      description: '캡틴 아메리카 슈트를 입어 보세요',
      image:
        'https://raw.githubusercontent.com/ITK-SHIN/my-react-shop-2024/main/public/bg_img/captain_bg.webp',
      height: '800',
      width: '100%',
      link: './captain',
    },
  ];

  return (
    <Carousel
      fullHeightHover={true}
      NavButton={({ onClick, className, style, next, prev }) => {
        // Other logic

        return (
          <Button onClick={onClick} className={styles.side_btn} style={style}>
            {next && (
              <img
                className={styles.back_icon}
                src="https://raw.githubusercontent.com/ITK-SHIN/my-react-shop-2024/9172551d40c68ff090e3f7f06820780fff5fc5bb/public/bg_img/arrow_forward.svg"
              />
            )}
            {prev && (
              <img
                className={styles.back_icon}
                src="https://raw.githubusercontent.com/ITK-SHIN/my-react-shop-2024/9172551d40c68ff090e3f7f06820780fff5fc5bb/public/bg_img/arrow_back.svg"
              />
            )}
          </Button>
        );
      }}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item: { name, description, image, height, width, link } }) {
  return (
    <Paper className={styles.carousel_paper}>
      <h2 className={styles.carousel_title}>{name}</h2>
      <p className={styles.carousel_text}>{description}</p>
      <Button
        className={`${styles.button_box1} ${styles.btn}  ${styles['btn-hover']} ${styles['color-2']} ${styles.CheckButton} `}
      >
        <Link to={link} className={styles.link}>
          바로가기 ✔
        </Link>
      </Button>
      <img
        className={styles.carousel_img}
        src={image}
        height={height}
        width={width}
      />
    </Paper>
  );
}
