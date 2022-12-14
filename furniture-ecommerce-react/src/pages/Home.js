import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import styles from "../styles/home.module.css";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import Services from "../Services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState(products);
  const [bestSalesProducts, setBestSalesProducts] = useState(products);
  const [mobileProducts, setMobileProducts] = useState(products);
  const [wirelessProducts, setWirelessProducts] = useState(products);
  const [popularProducts, setPopularProducts] = useState(products);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = trendingProducts.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = bestSalesProducts.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = mobileProducts.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = wirelessProducts.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = popularProducts.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  });

  return (
    <Helmet title="Home">
      <section className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={styles.heroContent}>
                <p className={styles.homeHeroSubtitle}>
                  Trending product in {year}
                </p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>
                  Lorem in doloremque in placeat repudiandae! Totam reiciendis
                  commodi facilis adipisci necessitatibus. Voluptatem nulla
                  nihil culpa soluta animi harum?.
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className={styles.buyBtn}
                >
                  <Link to="/shop">SHOP NOW</Link>
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
            <Col lg="12" className={`text-center`}>
              <h2 className={styles.sectionTitle}>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.bestSales}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center`}>
              <h2 className={styles.sectionTitle}>Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.timerCount}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={styles.clockTopContent}>
                <h4 className={`text-white fs-6 mb-2`}>Limited Offers</h4>
                <h3 className={`text-white fs-5 mb-3`}>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className={`${styles.buyBtn} ${styles.storeBtn}`}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className={`text-end`}>
              <img src={counterImg} alt="Counter" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.newArrival}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center`}>
              <h2 className={styles.sectionTitle}>New Arrival</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.popularCategory}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center`}>
              <h2 className={styles.sectionTitle}>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
