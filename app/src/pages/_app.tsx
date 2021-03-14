import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import client from '@src/common/apollo-client';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
