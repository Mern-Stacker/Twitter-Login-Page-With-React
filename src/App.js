import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitterr.png" alt="logo" className="logo" />
        <h3>Sign into twitter</h3>
        <button>
        <img src="./search.png" alt="logo" className="logo" />
        sign in with google account
        </button>
        <button>
        <img src="./apple.png" alt="logo" className="logo" />
        sign in with apple account
        </button>
        <hr></hr>
        <span>or</span>

        <form>
          <input type="text" placeholder="email or phone" />
          <button>Next </button>
        </form>

        <button>Forget password</button>
        <p>don't have account <a  href="www.google.com"> Sign up</a></p>
      </div>
    </div>
  );
}

export default App;
