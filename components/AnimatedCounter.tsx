'use client'

import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount:number }){
    return(
        <div className="w-full">
            <CountUp 
                end={amount} 
                decimal=","
                decimals={2}
                prefix="$"
            />
        </div>
    )
}
