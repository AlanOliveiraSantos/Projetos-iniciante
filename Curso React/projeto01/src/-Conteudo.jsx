function onteudo({ paragrafo }){

    let ctd = "do Site";
    const soma = 10 + 10;
    const  img = "src/assets/testing-website--1024x640.png";

    return (
        <div>
            <h2>Conteudo {ctd}</h2>
            <h3>10 + 10 = {soma}</h3>

            { paragrafo ?
                <p>O paragrafo existe = true <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vitae dolorum dolor quasi, cupiditate, qui eaque quisquam, soluta repellat alias itaque ducimus! Delectus excepturi aut est a blanditiis, magnam perferendis.</p>
                :
                <p>O aragrafo não existe = false</p> 
            }
            <img width={200} src= {img} />
        </div>
    )
}

export default onteudo
