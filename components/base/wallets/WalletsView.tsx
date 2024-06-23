import Wallet from "./Wallets"
import HeaderLabel from "../labels/HeaderLabel"
function WalletsView() {
  return (
    <>
      <HeaderLabel title="All Wallets">
        <a href="#">more</a>
      </HeaderLabel>
      <div className="carousel carousel-center max-w-full lg:max-w-full p-4 space-x-4  ">
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
        <div className="carousel-item">
          <Wallet></Wallet>
        </div>
      </div>
    </>
  )
}

export default WalletsView
