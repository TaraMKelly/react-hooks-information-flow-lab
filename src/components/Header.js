function Header( {onDarkModeClick, buttonName} ) {
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {buttonName ? "Dark" : "Light"} Mode
            </button>
      </header>
    )

}

export default Header