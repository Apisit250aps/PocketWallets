import Drawer from "@/components/layouts/DrawerLayout"

import BalanceView from "@/components/base/wallets/BalanceView"
import WalletsView from "@/components/base/wallets/WalletsView"
import TransactionView from "@/components/base/transactions/TransactionsView"
export default function Home() {
  return (
    <Drawer>
      <BalanceView />
      <WalletsView />
      <TransactionView />
    </Drawer>
  )
}
