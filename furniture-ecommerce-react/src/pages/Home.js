import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import styles from '../styles/home.module.css';
import heroImg from '../assets/images/hero-img.png';
import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {

  const year = new Date().getFullYear();

  return (
    <Helmet title="Home">
      <section className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className={styles.heroContent}>
                <p className={styles.homeHeroSubtitle}>Trending product  in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem in doloremque in placeat repudiandae! Totam reiciendis commodi facilis adipisci necessitatibus. Voluptatem nulla nihil culpa soluta animi harum?.</p>
                <motion.button whileTap={{ scale: 1.2}} className={styles.buyBtn}>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={styles.heroImg}>
                <img src={heroImg} alt="Hero Img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className={styles.trendingProducts}>
        <Container>
          <Row>
            <Col lg='12' className={`text-center`}>
              <h2 className={styles.sectionTitle}>Trending Products</h2>
            </Col>
            <ProductsList />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home;
