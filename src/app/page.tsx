"use client"
import styles from "./page.module.css";
// import { useAccount } from "wagmi";
import { useAppKitAccount } from "@reown/appkit/react";
import { useWriteContract } from 'wagmi'
import contract from "../../contract.json"
import Login from "./login/page";
export default function Home() {

  const { writeContract } = useWriteContract()


  // const { address, isConnecting } = useAccount();
  // if (address) {

  // }
  const { address, isConnected, status } = useAppKitAccount()
  console.log({ address, isConnected, status });

  const imageURL = "ipfs://QmSYVgdMWHK3gfMX5R7CUaeYecM8QsKnU4H4he3AWo7uYP"

  const handlerNFT = () => {
    writeContract({
      abi: contract.ABI,
      address: contract.ADDRESS as `0x${string}`,
      functionName: 'safeMint',
      args: [
        address,
        imageURL,
      ],
    })
  }


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Login />

      </main>
    </div>
  );
}
