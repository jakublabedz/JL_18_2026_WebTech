
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Egzamin() {

  const [password, setPassword] = useState('');
  const [autogen, setAuto] = useState(true);
  const [data, setData] = useState();
  const [adress, setAdress] = useState('');
  const [login, setLogin] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generujHaslo = () => {
    const male = "abcdefghijklmnopqrstuvwxyz";
    const duze = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cyfry = "0123456789";
    const znaki = "!@#$%^&*()_+-=";

    const wszystkie = male + duze + cyfry + znaki;

    const losuj = (tekst) =>
      tekst[Math.floor(Math.random() * tekst.length)];

    let haslo = [
      losuj(male),
      losuj(duze),
      losuj(cyfry),
      losuj(znaki)
    ];

    for (let i = 0; i < 8; i++) {
      haslo.push(losuj(wszystkie));
    }

    haslo.sort(() => Math.random() - 0.5);

    setGeneratedPassword(haslo.join(''));
  };

  const zastosujHaslo = () => {
    setPassword(generatedPassword);
  };

  const zapisz = (e) => {
    e.preventDefault();
    setData({ adress, login, password });
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Menedżer haseł - wykonał 18</h1>

        <div className="row">
          <div className="col-md-6">
            <form onSubmit={zapisz}>

              <div className="mb-3">
                <label>Adres WWW:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Adres strony WWW"
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Login:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Twój login"
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={autogen}
                  onChange={(e) => setAuto(e.target.checked)}
                />
                <label className="form-check-label">
                  Wygeneruj hasło
                </label>
              </div>

              <div className="mb-3">
                <label>Hasło:</label>
                <input
                  type="password"
                  className="form-control"
                  disabled={autogen}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {autogen && (
                <button
                  type="button"
                  className="btn btn-success mb-3"
                  onClick={generujHaslo}
                >
                  Generuj hasło
                </button>
              )}

              <br />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Zapisz
              </button>

            </form>
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <h4>Podgląd wygenerowanego hasła</h4>

              <p>
                {generatedPassword || "Nie wygenerowano jeszcze hasła"}
              </p>

              <button
                type="button"
                className="btn btn-warning"
                disabled={!generatedPassword}
                onClick={zastosujHaslo}
              >
                Zastosuj hasło
              </button>
            </div>
          </div>
        </div>

        {data && (
          <div className="mt-4">
            <h3>Zapisane dane:</h3>
            <p>Adres: {data.adress}</p>
            <p>Login: {data.login}</p>
            <p>Hasło: {data.password}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Egzamin;
