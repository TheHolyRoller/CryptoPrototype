

import Image from "next/image";
import styles from "./page.module.css";
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'


export default function Home() {
  return (
    <main className={styles.main}>
<div className="Uniswap">
    <SwapWidget />
  </div>
      
    </main>
  );
}
