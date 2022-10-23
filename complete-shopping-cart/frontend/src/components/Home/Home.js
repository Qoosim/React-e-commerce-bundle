import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart } from '../../features/cartSlice';
import { useGetAllProductsQuery } from '../../features/productsApi';
// import { useSelector } from 'react-redux'; // for getting data from createAsyncThunk
import styles from './home.module.css';

const Home = () => {
  // const { items, status } = useSelector((state) => state.products) // for createAsyncThunk
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  }

  return (
    <div className={styles.homeContainer}>
      { isLoading ? (
        <p>Loading...</p> 
      ) : error ? (
          <p>An error occured..</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className={styles.products}>
            {
              data?.map((product) => {
                return (
                  <div key={product.id} className={styles.product}>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.details}>
                      <span>{product.desc}</span>
                      <span className={styles.price}>${product.price}</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                )
              })
            }
          </div>
        </>
      ) 
      }
    </div>
  )
}

export default Home;
