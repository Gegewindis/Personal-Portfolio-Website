
function FamiliarTools() {
    const tools = ["fa-brands fa-python fa-3x", "fa-brands fa-html5 fa-3x", 
                    "fa-brands fa-css fa-3x", "fa-solid fa-database fa-3x",
                    "fa-brands fa-git-alt fa-3x", "fa-brands fa-react fa-3x",
                    "fa-brands fa-flutter fa-3x", "fa-brands fa-github fa-3x",
                    "fa-brands fa-discord fa-3x"]


    return(
        <div className="familiar-tools-container">
            <div className="familiar-tools-header">
                    <h1>Some familiar tools</h1>
            </div>

            <div className="familiar-tools-list"> 
                {tools.map((tool, index) => (<i key={index} className={tool}></i>))}
            </div>

        </div>
    );
}

export default FamiliarTools