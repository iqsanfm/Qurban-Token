import { ethers, Contract } from 'ethers';
import PaymentProcessor from './contracts/PaymentProcessor.json';
import Qbn from './contracts/Qbn.json';

const getBlockchain = () => 
    new Promise((resolve, reject) => {
        window.addEventListener('load', async () => {
            if(window.ethereum) {
                await window.ethereum.enable();
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();

                const paymentProcessor = new Contract(
                    PaymentProcessor.networks[window.ethereum.networkVersion].address,
                    PaymentProcessor.abi,
                    signer
                );

                const Qbn = new Contract(
                    Qbn.networks[window.ethereum.networkVersion].address,
                    Qbn.abi,
                    signer
                );

                resolve({provider, paymentProcessor, Qbn});
            }
            resolve({provider: undefined, paymentProcessor: undefined, Qbn: undefined});
        });
    });

    export default getBlockchain;