import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";



export default async function Home(){
    const loggedIn = await getLoggedInUser()

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.45}
                    />
                </header>

                RECENT TRANSACTION
            </div>

            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 1250.50}, {currentBalance: 500.00}]}
            />
        </section>
    )
}