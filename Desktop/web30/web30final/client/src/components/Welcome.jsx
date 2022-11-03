import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";


const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder={placeholder}
        type={type}
        step = "0.0001"
        value={value}
        onChange ={(e) => handleChange(e,name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />

);

const Welcome = () => {

    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
    
        e.preventDefault();
    
        if (!addressTo || !amount || !keyword || !message) return;
    
        sendTransaction();
      };

    return(
        <div className = 'flex w-full justify-center items-center'>
            <div className = "flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className = "flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className = 'text-3xl sm:text-5xl text-white'>
                        Send Crypto <br /> across the World!
                    </h1>
                    <p className = "text-left mt-5 text-white font-light md:w-9/12 w-11/12">
                        <b> Connect and send </b> on PTX!
                    </p>

                    {!currentAccount && (
                        <button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                         <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white text-base font-semibold">Connect Wallet </p>
                        </button>
                    )}

                    <div className = "flex flex-row w-full mt-10">
                        <div className ={`rounded-tl-2xl ${commonStyles}`}>
                        <a href={`https://www.goodreads.com/author/quotes/7020017.Satoshi_Nakamoto`} target="_blank" rel="noreferrer">
                            <p class="font-medium">Reliability</p>
                        </a>
                        </div>
                        <div className = {commonStyles}>                         
                        <a href={`https://www.redteamsecure.com/blog/4-key-cryptocurrency-security-measures-are-you-following-them`} target="_blank" rel="noreferrer">
                            <p class="font-medium">Security</p>
                        </a>
                        </div>
                        <div className = {commonStyles}>
                        <a href={`https://ethereum.org/en/whitepaper/`} target="_blank" rel="noreferrer">
                            <p class="font-medium">Ethereum</p>
                        </a>
                        </div>
                        <div className ={`rounded-tr-2xl ${commonStyles}`}>
                        <a href={`https://bitcoin.org/bitcoin.pdf`} target="_blank" rel="noreferrer">
                            <p class="font-medium text-align:center"> Bitcoin</p>
                        </a>
                        </div>
                    </div>
                    <div className = "flex flex-row w-full">
                        <div className ={`rounded-bl-2xl ${commonStyles}`}>
                        <a href={`https://web3.foundation/about/`} target="_blank" rel="noreferrer">
                            <p class="font-medium">Web 3.0</p>
                        </a>
                        </div>
                        <div className = {commonStyles}>
                        <a href={`https://www.softwaretestinghelp.com/best-cryptocurrency-exchange/`} target="_blank" rel="noreferrer">
                            <p class="font-medium">Low fees</p>
                        </a>
                        </div>
                        <div className = {commonStyles}>
                        <a href={`https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-nft`} target="_blank" rel="noreferrer">
                            <p class="font-medium">NFT's</p>
                        </a>
                        </div>
                        <div className ={`rounded-br-2xl ${commonStyles}`}>
                        <a href={`https://coinpaprika.com`} target="_blank" rel="noreferrer">
                            <p class="font-medium">Market</p>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className = "p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
                        <div className = "flex justify-between flex-col w-full h-full">
                            <div className = "flex justify-between items-start">
                                <div className = "w-10 h-10 rounded-full border-2 border-black flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#171717"></SiEthereum>
                                </div>
                                <BsInfoCircle fontSize={17} color="#171717"></BsInfoCircle>

                            </div>
                            <div>
                                <p className ="text-black font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className ="text-black font-bold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="p-5 sm: w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                            <Input placeholder="Address to" name = "address To" type = "text" handleChange={handleChange}/>
                            <Input placeholder="Amount (ETH)" name = "amount" type = "number" handleChange={handleChange}/>
                            <Input placeholder="Keyword (GIF)" name = "keyword" type = "text" handleChange={handleChange}/>
                            <Input placeholder="Enter message" name = "message" type = "text" handleChange={handleChange}/>
                        
                            <div className="h-[1px] w-full bg-gray-400 my-2" />
                            {isLoading ? <Loader />
                                    : (
                                    <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                                    Send now
                                    </button>
                                )}

                             
                        </div>
                </div>

                

            </div>

        </div>
    );
}

export default Welcome;
