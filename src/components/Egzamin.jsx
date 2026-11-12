import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Egzamin() {


    const zapisz = (e) => {
        e.preventDefault();
        setData({ adress, login, password, autogen });
    };

    const [password, setPassword] = useState('');
    const [autogen, setAuto] = useState(true);
    const [data, setData] = useState();
    const [adress, setAdress] = useState('');
    const [login, setLogin] = useState('');
 
    return (
        <>
            <div>
                <h1>Menedżer haseł - wykonał 18</h1>
                <form onSubmit={zapisz}>
                    <div>
                        <label>Adres WWW:</label>
                        <input className="form-control" type="text"  placeholder="Adres strony WWW" onChange={(e) => setAdress(e.target.value)} />
                    </div>

                    <div>
                        <label>Login:</label>
                        <input className="form-control" type="text"  placeholder="Twój login" onChange={(e) => setLogin(e.target.value)} />
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" checked={autogen} onChange={(e) => setAuto(e.target.checked)} />
                        <label className="form-check-label">Wygeneruj hasło</label>
                    </div>

                    <div>
                        <label>Hasło:</label>
                        <input type="password" className="form-control" disabled={autogen} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Zapisz</button>
                </form>

            </div>
            {data && (
                <div>
                    <p>Adres: {data.adress}</p>
                    <p>Login: {data.login}</p>
                    <p>{data.autogen ? 'Hasło automatycznie generowane' : `Hasło: ${data.password}`}</p>
                </div>
            )}
        </>
    );
}

export default Egzamin;