function InfoBox(name) {

    const handleClick = (tech) => {
        console.log(`Kliknięto technologię: ${tech}`);
    };


    return (
        <div>
            <button onClick={() => handleClick(name)}>
                {name}
            </button>
        </div>
    );
}

export default InfoBox;