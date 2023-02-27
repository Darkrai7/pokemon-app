import { Container, Text, Image } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text><h1>No hay favoritos</h1>
        <Image
          src="https://wallpaperaccess.com/full/379960.jpg"
          width={400}
          height={400}
          />
        </Text>

      </Container>
  )
}
