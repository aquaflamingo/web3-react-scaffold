import { useWeb3React } from '@web3-react/core'
import { injectedConnector } from './connectors'

// Web3Connect is responsible for rendering the initial connect button
// to initiate Web3 connection using the Web3React hook to communicate with
// the Web3Provider.
const Web3Connect = ({ children }) => {
	 const { active, activate } = useWeb3React()

	 // Attempts to activate the Web3 connection using the injectedConnector 
	 const connectToWeb3 = () => {
			console.log("Web3Connect: Web3 Activating")

			activate(injectedConnector, undefined, true).catch(err => {
				 console.log("Web3Connect: Web3 Failed to activate")
				 console.error(err)
				 debugger
			})
	 }

	 console.log("Web3Connect: active is ", active)

	 return active ?
			<div>{children}</div> :
			(
				 <button type="button" onClick={() => connectToWeb3()}>
						Connect
				 </button>
			)
}

export default Web3Connect
