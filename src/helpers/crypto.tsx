import CryptoJS from 'crypto-js';

const encrypt = (data: string, key: string): string => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

const decrypt = (text: string, key: string): void | string => {
    try {
        const bytes = CryptoJS.AES.decrypt(text, key);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        console.error(err);
        return;
    }
};

export { encrypt, decrypt };
