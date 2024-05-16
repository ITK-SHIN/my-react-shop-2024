/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';
import { items } from '../../utils/carouselImg';

const CarouselBox = () => {
  return (
    <Carousel
      fullHeightHover={true}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'transparent',
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: '0',
          top: 'unset',
        },
      }}
      NavButton={({ onClick, className, style, next, prev }) => {
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
      /*       next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      } */
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item: { name, description, image, height, width, link } }) => {
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
};

export default CarouselBox;
