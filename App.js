import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, ScrollView, BackHandler, NativeModules, Animated, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";

const styles = StyleSheet.create({
  ContainerBG: {
    flex: 1,
    backgroundColor: '#fff'
  },

  CardAppBar: {
    height: 40,
    marginTop: 10,
    backgroundColor: "transparent",
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },

  CardInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#fff',
    width: '75%',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 2
  },

  containerLupa: {
    flexDirection: 'row'
  },

  container: {
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },

  boxCategorias: {
    height: 130,
    width: '100%',
    padding: 5,
    marginTop: 10
  },

  ContainerBotao: {
    alignItems: 'center',
    width: 100,
  },

  botao: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 23,
    padding: 8
  },

  ImagemBotao: {
    height: '100%',
    width: '100%'
  },

  txtBotao: {
    textAlign: 'center',
    color: '#656565',
    fontSize: 12,
    marginTop: 10
  },

  containerBotaoRight: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%'
  },

  containerBoxBemVindo: {
    backgroundColor: "#feebdd",
    height: 260,
    width: '100%',
    alignItems: 'center'
  },

  boxHeader: {
    marginTop: 10,
    height: 30,
    width: '60%',
    borderRadius: 30,
    backgroundColor: '#ed4d29',
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtBemVindo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15
  },

  boxImagemPromo: {
    width: '95%',
    height: 180,
    backgroundColor: 'white',
    marginTop: 10
  },

  txtCupom: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 15,
    color: '#5d5d5d'
  },

  ImagemCupomStyle: {
    width: '100%',
    height: '100%'
  },

  flex2: {
    flex: 2,
    backgroundColor: 'white'
  },

  boxHeaderFlex2: {
    height: 50,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: 'white'
  },

  txtHeaderFlex2: {
    color: '#d54f38',
    fontSize: 16
  },

  boxSubCategorias: {
    height: 100,
    width: '100%',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoSubCateg: {
    height: '90%',
    width: 80,
    backgroundColor: 'white',
    margin: 3,
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtSubCateg: {
    fontSize: 11,
    textAlign: 'center',
    color: '#5d5d5d'
  },

  ImageSubCateg: {
    height: 40,
    width: 40,
    marginBottom: 5
  },

  touchCard: {
    margin: '1%',
    width: '48%',
    height: 360,
    backgroundColor: 'white'
  },

  cardImgProduto: {
    width: '100%',
    height: '65%'
  },

  txtProduto: {
    color: '#2d2d2d',
    marginBottom: 15
  },

  bordaVendedorlocal: {
    width: '60%',
    height: 20,
    borderWidth: 1
  },

  txtVendedorLocal: {
    textAlign: 'center',
    fontSize: 12
  },

  space: {
    width: '50%',
    height: 20
  },

  containerFooterCardProduto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
  },

  containerPrices: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  cifrao: {
    marginTop: 4,
    color: '#ed4d29'
  },

  txtValor: {
    fontSize: 19,
    color: '#ed4d29'
  }
})

function AppBarSearch() {
  return (
    <View style={styles.CardAppBar}>
      <View style={styles.CardInput}>
        <View style={styles.containerLupa}>
          <Icon style={{ paddingTop: 3, marginRight: 10 }} name='search-outline' size={20} color={'gray'} />
          <TextInput placeholder='Shopee'></TextInput>
        </View>
        <Icon name='camera-outline' size={20} color={'gray'} />
      </View>

      <View style={styles.containerBotaoRight}>
        <TouchableOpacity style={{ marginLeft: 5 }}>
          <Icon name='cart-outline' size={29} color={'white'} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 2, marginLeft: 3 }}>
          <Icon name='chatbubble-ellipses-outline' size={25} color={'white'} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

function Carrosel({ imags }) {
  return (
    <SliderBox
      images={imags}
      sliderBoxHeight={250}
      autoplay
      circleLoop
    />
  )
}

function BotaoCategoria({ title, img }) {
  return (
    <View style={styles.ContainerBotao}>
      <TouchableOpacity style={styles.botao}>
        <Image resizeMode='contain' style={styles.ImagemBotao} source={img} />
      </TouchableOpacity>
      <Text style={styles.txtBotao}>{title}</Text>
    </View>
  )
}

function BoxBemVindo() {
  return (
    <View style={styles.containerBoxBemVindo}>
      <View style={styles.boxHeader}>
        <Text style={styles.txtBemVindo}>Presente de Boas-Vindas</Text>
      </View>

      <View style={styles.boxImagemPromo}>
        <Text style={styles.txtCupom}>CUPOM EXCLUSIVO PARA 1ª COMPRA</Text>
        <Image
          resizeMode='contain'
          style={styles.ImagemCupomStyle}
          source={require('./srcs/imgs/cupom2.png')}
        />
      </View>

    </View>
  )
}

function ContainerProdutos({ Produtos }) {
  return (
    <View style={styles.flex2}>

      <View style={styles.boxHeaderFlex2}>
        <Text style={styles.txtHeaderFlex2}>DESCOBERTAS DO DIA</Text>
      </View>

      <View style={styles.boxSubCategorias}>
        <ScrollView horizontal>
          <BotaoSub img={require('./srcs/imgs/likevetor.png')} title={'Tudo'} />
          <BotaoSub img={require('./srcs/imgs/30OFF.png')} title={'Até 30% OFF'} />
          <BotaoSub img={require('./srcs/imgs/oferrs.png')} title={'Ofertas em Destaque'} />
          <BotaoSub img={require('./srcs/imgs/megafone.png')} title={'Novidades'} />
          <BotaoSub img={require('./srcs/imgs/BROFF.png')} title={'Vendedores Locais'} />
          <BotaoSub img={require('./srcs/imgs/likevetor.png')} title={'Casa e Decorações'} />
          <BotaoSub img={require('./srcs/imgs/likevetor.png')} title={'Tudo'} />
        </ScrollView>
      </View>

      <View style={{
        width: '100%',
        backgroundColor: '#f5f5f5',
      }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Produtos}
          renderItem={({ item }) => <CardPoduto data={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />

      </View>


    </View>
  );
}

function BotaoSub({ title, img }) {
  return (
    <TouchableOpacity style={styles.botaoSubCateg}>
      <Image
        source={img}
        style={styles.ImageSubCateg}
      />
      <Text style={styles.txtSubCateg}>{title}</Text>
    </TouchableOpacity>
  )
}

function CardPoduto({ data }) {
  const { imgProduto, indicado, nomeProduto, promo, valor, vendas, vendedorLocal } = data;
  return (
    <TouchableOpacity style={styles.touchCard}>
      <Image resizeMode='contain' style={styles.cardImgProduto} source={{ uri: imgProduto }} />
      <View style={{ padding: 10 }}>
        <Text numberOfLines={2} style={styles.txtProduto}>{nomeProduto}</Text>

        {vendedorLocal ?
          <View style={styles.bordaVendedorlocal}>
            <Text style={styles.txtVendedorLocal}>Vendedor Local</Text>
          </View>
          :
          <View style={styles.space} />
        }

        <View style={styles.containerFooterCardProduto}>
          <View style={styles.containerPrices}>
            <Text style={styles.cifrao}>R$</Text>
            <Text style={styles.txtValor}>{valor},00</Text>
          </View>
          <Text style={{ color: '#2d2d2d' }}>{vendas} Vendido</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default function App() {

  const [images, setimages] = useState([
    require('./srcs/imgs/slide1.png'),
    require('./srcs/imgs/slide2.png'),
    require('./srcs/imgs/slide3.png'),
  ]);

  const produtos = [
    { id: 1, nomeProduto: 'Kit Patricia Abravanel Essence Jequiti', imgProduto: 'https://jequiti.vteximg.com.br/arquivos/ids/166932-850-850/16718.png?v=637855420603230000', valor: 5, vendas: 54, vendedorLocal: true, indicado: true, promo: 60 },
    { id: 2, nomeProduto: 'OFERTA Kit 2 Lixeiras Redonda 10 Litros Imita Inox para Banheiro Cozinha Escritório Automática CLick Label', imgProduto: 'https://m.media-amazon.com/images/I/41KeMxPLP8L._AC_SX679_.jpg', valor: 34, vendas: 43, vendedorLocal: false, indicado: true, promo: 30 },
    { id: 3, nomeProduto: 'Capa Flexível De Silicone Para Samsung Galaxy A32 4G A22 4G A52S A52 A72 A51 A71 A23 A03 ', imgProduto: 'https://ae01.alicdn.com/kf/S4aeb49d3f10b4c179c07b000338c0435v/Para-Samsung-Galaxy-A52-A52S-A42-A32-A22-A81-A51-A71-A21S-A03-A03S-A72-Capa.jpg_Q90.jpg_.webp', valor: 15, vendas: 65, vendedorLocal: true, indicado: false, promo: 20 },
    { id: 4, nomeProduto: 'Linha 0,22-1000 jardas (sem elasticidade) TW matot MIX bogel.', imgProduto: 'https://cf.shopee.com.br/file/e298d3b41cb0933fa48e3e58ecf98fa2', valor: 25, vendas: 776, vendedorLocal: false, indicado: false, promo: 10 },
    { id: 5, nomeProduto: 'OFERTA Kit 2 Lixeiras Redonda 10 Litros Imita Inox para Banheiro Cozinha Escritório Automática CLick Label', imgProduto: 'https://m.media-amazon.com/images/I/41KeMxPLP8L._AC_SX679_.jpg', valor: 34, vendas: 43, vendedorLocal: false, indicado: true, promo: 30 },
    { id: 6, nomeProduto: 'Kit Patricia Abravanel Essence Jequiti', imgProduto: 'https://jequiti.vteximg.com.br/arquivos/ids/166932-850-850/16718.png?v=637855420603230000', valor: 5, vendas: 54, vendedorLocal: true, indicado: true, promo: 60 },
  ]

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 250;
  const Header_Minimum_Height = 70;

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ["transparent", 'white'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
  });


  return (
    <SafeAreaView style={styles.ContainerBG}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,
            },
          ]}>
          <Carrosel imags={images} />
          <AppBarSearch />
        </Animated.View>
        <ScrollView
          scrollEventThrottle={5}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
            { useNativeDriver: false }
          )}>

          <View style={styles.boxCategorias}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BotaoCategoria img={require('./srcs/imgs/image-removebg-preview.png')} title={'Moedas Shopee'} />
              <BotaoCategoria img={require('./srcs/imgs/free.png')} title={'Frete Grátis'} />
              <BotaoCategoria img={require('./srcs/imgs/sacola.png')} title={'Shopee Oficial'} />
              <BotaoCategoria img={require('./srcs/imgs/batom.png')} title={'Clube de Beleza'} />
              <BotaoCategoria img={require('./srcs/imgs/vendedores.png')} title={'Vendedores Internacionais'} />
            </ScrollView>
          </View>

          <View style={styles.boxCategorias}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <BotaoCategoria img={require('./srcs/imgs/consoile.png')} title={'Jogos e Prêmios'} />
              <BotaoCategoria img={require('./srcs/imgs/cuponss.png')} title={'Cupons Diários'} />
              <BotaoCategoria img={require('./srcs/imgs/pcecell.png')} title={'Espaço Tecnologia'} />
              <BotaoCategoria img={require('./srcs/imgs/liveshopee.png')} title={'Shopee Live '} />
              <BotaoCategoria img={require('./srcs/imgs/sacola.png')} title={'Shopee Doações'} />
              <BotaoCategoria img={require('./srcs/imgs/image-removebg-preview.png')} title={'Moedas Shopee'} />

            </ScrollView>
          </View>
          <BoxBemVindo />
          <ContainerProdutos Produtos={produtos} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}