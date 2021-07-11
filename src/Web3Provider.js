
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider as EthersJsWeb3Provider} from '@ethersproject/providers'

const getLibrary = (provider) => {
  const lib = new EthersJsWeb3Provider(provider)
  lib.pollingInterval = 1000
  return lib
}

const Web3Provider = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}

export default Web3Provider;
