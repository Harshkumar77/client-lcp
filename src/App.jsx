import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import ContractsList from "./components/ContractsList/ContractsList"
import ContactsList from "./components/ContractsList/ContractsList"
import History from "./components/History/History"
import NavBar from "./components/NavBar/NavBar"
import Profile from "./components/Profile/Profile"

const UserContext = createContext()

class User {
  walletAddress
  constructor(walletAddress) {
    this.walletAddress = walletAddress
  }

  get isConnected() {
    return this.walletAddress == null
  }
}

function App() {
  const [walletAdress, setWalletAddress] = useState(null)

  const user = new User(walletAdress)

  return (
    <UserContext.Provider value={{ user, setWalletAddress }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContractsList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
export { UserContext }
