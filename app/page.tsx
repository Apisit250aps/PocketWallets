import Drawer from "@/components/layouts/DrawerLayout"
import { useSession } from "next-auth/react"
import BalanceView from "@/components/base/wallets/BalanceView"
import WalletsView from "@/components/base/wallets/WalletsView"
import TransactionView from "@/components/base/transactions/TransactionsView"
export default function Page() {
  
  return (
    <Drawer>
      <BalanceView />
      <WalletsView />
      <TransactionView />
    </Drawer>
  )
}
