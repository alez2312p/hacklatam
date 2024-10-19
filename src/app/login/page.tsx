import { FormEvent, useState } from 'react';
import styles from './Login.module.css';
import CryptoJS from "crypto-js";
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [isSelected, setIsSelected] = useState(false);


    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        // if (email !== "" && password !== "") {
        //     const newPassword = String(CryptoJS.SHA256(`${password}`));
        //     console.log({ email: email, password: password });
        //     const res = await fetch('/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email, newPassword }),
        //     });
        //     // Verifica si la respuesta es JSON antes de intentar leer el cuerpo
        //     if (!res.ok) {
        //         console.error('Error:', res.status);
        //         return;
        //     }

        //     const data = await res.json();
        //     if (data.token) {
        //         // Almacenar el token y proceder con la conexión de wallet
        //         localStorage.setItem('token', data.token);
        //     }
        // }
        if (email === "prueba1@gmail.com" && password === "prueba") {
            router.push("/dashboard");
            console.log("entra");
        }
    };

    return (
        <div className={styles.container}>
            {!isSelected && (
                <div >
                    <form onSubmit={handleLogin} className={styles.form}>
                        <div className={styles.form_row}>
                            <label>Email: </label>
                            <input type="email" name="email" placeholder='ejemplo@gmail.com' className={styles.input} required />
                        </div>
                        <div className={styles.form_row}>
                            <label>Password: </label>
                            <input type="password" name="password" className={styles.input} required />
                        </div>
                        <button type="submit" className={styles.button}>Login</button>
                    </form>
                </div>
            )}
            <div
                className={styles.checkbox}
                onClick={() => setIsSelected(!isSelected)}
            >
                <input
                    className={styles.checkbox_checker}
                    type="checkbox"
                    checked={isSelected}
                />
                <label>Usar una Wallet</label>
            </div>
            <div className={styles.checkbox_wallet_connect}>
                {isSelected && <w3m-button />}
            </div>
        </div>
    );
}
