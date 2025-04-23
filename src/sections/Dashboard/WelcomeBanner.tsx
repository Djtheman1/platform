import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 12px;
    padding: 12px 20px;
    background: #ffffff90;
    transition: background-color .3s ease, transform .2s ease;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #ffffff;
      transform: scale(1.05);
    }

    &:active {
      background: #f1f1f1;
    }

    @media (min-width: 800px) {
      width: 150px;
    }
  }
`

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(-45deg, #ffb07c, #ff3e88, #2969ff, #ef3cff, #ff3c87);
  background-size: 300% 300%;
  animation: welcome-fade-in 1s ease, backgroundGradient 30s ease infinite;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, .1)) drop-shadow(0 2px 2px rgba(0, 0, 0, .1));
  text-align: center;

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }

  & > div {
    padding: 20px;
    filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 400;
    margin-bottom: 20px;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const store = useUserStore()
  
  const copyInvite = () => {
    store.set({ userModal: true })
    if (!wallet.connected) {
      walletModal.setVisible(true)
    }
  }

  return (
    <Welcome>
      <div>
        <h1>Welcome to AMETHYST.GG</h1>
        <p>A PLACE TO WIN BIG AND HAVE FUN!</p>
      </div>
      <Buttons>
        <button onClick={copyInvite}>💸 Copy Invite</button>
        <button onClick={() => window.open('https://v2.gamba.so/', '_blank')}>🚀 Add Liquidity</button>
        <button onClick={() => window.open('https://discord.gg/HSTtFFwR', '_blank')}>💬 Discord</button>
      </Buttons>
    </Welcome>
  )
}
