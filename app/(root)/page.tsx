import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";



export default function Home(){
    const loggedIn = { firstName: "Wisdom", lastName: "Jackson", email: 'wisejackson@dom.dev' }

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
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