import { useEffect } from "react";
import { useReadContract } from 'wagmi'
export default function Dashboard() {
    const result = useReadContract({
        abi,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        functionName: 'totalSupply',
    })
    useEffect(() => {

    }, [])
    return (
        <div>
            Adentro
        </div>
    );
}