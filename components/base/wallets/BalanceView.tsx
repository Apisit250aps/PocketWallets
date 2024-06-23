function BalanceView() {
  let balance: number = 5560.0
  return (
    <div className="flex flex-col bg-base-100 justify-center items-center rounded-b-3xl lg:rounded-none py-3">
      <h3 className="text-base">Total Balance</h3>
      <div className=" pt-1">
        <h1 className=" text-5xl">$ {balance}</h1>
      </div>
      <div className="text-green-400 py-2">
        <b>+ $ 50.75</b>
      </div>
    </div>
  )
}
export default BalanceView
