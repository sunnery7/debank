import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";


export default function PlaidLinnk({ user, variant }: PlaidLinkProps){
    const router = useRouter()
    const [token, setToken] = useState('')

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user) 
            setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user])
    
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({ publicToken: public_token, user })

        router.push('/')
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

    return(
        <>
            {variant === 'primary' ? (
                <Button disabled={!ready} onClick={() => open} className="plaidlink-primary">Connect Bank</Button>
            ): variant === 'ghost' ? (
                <Button>Connect bank</Button>
            ):(
                <Button>Connect</Button>
            )}
        </>
    )
}