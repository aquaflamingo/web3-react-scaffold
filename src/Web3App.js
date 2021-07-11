import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider as EthersJsProvider} from '@ethersproject/providers'

const Web3App = () => {
	 const { active, connector } = useWeb3React()
	 const [ ethersjsInstance, setEthersJs ] = useState(null)
	 const [ account, setAccount ] = useState('')

	 useEffect(() => {
			console.log("Web3App: fetching provider")
			connector?.getProvider().then(provider => {
				 console.log("Web3App: provider obtained ", provider)
				 const instance = new EthersJsProvider(provider)
				 console.log("Web3App: setting ethers js instance ", instance)
				 setEthersJs(instance)
			})
	 }, [active, connector])

	 useEffect(() => {
			if (ethersjsInstance === null) {
				 console.log("Web3App: ethersjs is null")
				 return
			}
			console.log("Web3App: Attempting to list accounts for etherjs")

			// TODO await
			ethersjsInstance.listAccounts().then((accounts) =>  {
				 console.log("Web3App: successfully obtained accounts ", accounts)
				 setAccount(accounts[0])
			}).catch((err)=> {
				 debugger
				 console.log("Web3App: failed to list accounts")
				 console.error(err)
			})
	 }, [ethersjsInstance])

	 return (
			<div className="Web3App">
				 <p>
						Web3 Provider injection was
						{ethersjsInstance ? ` Successful - Your account is ${account}` : " Not successful" }
				 </p>
			</div>
	 )
}

export default Web3App
