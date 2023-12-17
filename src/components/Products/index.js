import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProductStyle'
import ProductCards from '../Cards/ProductCards'
import { product } from '../../data/constants'


const Products = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="products">
      <Wrapper>
        <Title>Produk Terlaris</Title>
        <Desc>
          Aneka Produk Terlaris Heustica
        </Desc>
        <ToggleButtonGroup>
  {toggle === 'all' ?
    <ToggleButton active value="all" onClick={() => setToggle('all')}>Semua</ToggleButton>
    :
    <ToggleButton value="all" onClick={() => setToggle('all')}>Semua</ToggleButton>
  }
  <Divider />
  {toggle === 'coklat' ?
    <ToggleButton active value="coklat" onClick={() => setToggle('coklat')}>Coklat</ToggleButton>
    :
    <ToggleButton value="coklat" onClick={() => setToggle('coklat')}>Coklat</ToggleButton>
  }
  <Divider />
  {toggle === 'vanilla' ?
    <ToggleButton active value="vanilla" onClick={() => setToggle('vanilla')}>Vanilla</ToggleButton>
    :
    <ToggleButton value="vanilla" onClick={() => setToggle('vanilla')}>Vanilla</ToggleButton>
  }
</ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && product
            .map((product) => (
              <ProductCards product={product} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {product
            .filter((item) => item.category == toggle)
            .map((product) => (
              <ProductCards product={product} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Products