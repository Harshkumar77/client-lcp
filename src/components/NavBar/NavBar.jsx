import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../App"

export default function NavBar() {
  const { user, setWalletAddress } = useContext(UserContext)

  return (
    <nav className="bg-gray-100 flex align-baseline items-center py-2">
      <NavBrand />
      <Link to={`/profile`}>
        <NavItem text="Your profile" />
      </Link>
      <Link to={`/history`}>
        <NavItem text="Past Contracts" />
      </Link>
      {user.isConnected ? (
        <NavItem
          text="Connect Wallet"
          onClick={() => connectMetamask(setWalletAddress)}
        />
      ) : (
        <NavItem text={user.walletAddress} />
      )}
    </nav>
  )
}

function NavBrand() {
  return (
    <Link className=" font-black semibold text-4xl mx-2 mr-auto" to={`/`}>
      LCP
    </Link>
  )
}

function NavItem({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-1xl p-2 mx-1 bg-rose-100 rounded-md hover:bg-rose-400"
    >
      {text}
    </button>
  )
}

function connectMetamask(setWalletAddress) {
  if (!window.ethereum && !window.ethereum.isMetaMask) {
    if (confirm("Please Install metamask"))
      window.open("https://metamask.io/", "_blank")
    return
  }
  const { ethereum } = window

  ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => setWalletAddress(accounts[0]))

  ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x13881",
        chainName: "Polygon TestNet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
      },
    ],
  })
}
