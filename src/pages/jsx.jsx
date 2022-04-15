export default function Jsx(){
    const a = 4
    const b = 3

    const obj = {nome:'João', idade:30}

    const titulo = <h1>JSX é um conceito Central</h1>

    function subTitulo() {
        return <h2>{"Hello guys".toUpperCase()}</h2>
    }



    return (
        <div>
            {titulo}
            {subTitulo()}
            <h1>JSX é um conceito Central</h1>
            <h1>{a*b}</h1>
            <h2>{"muito legal".toUpperCase()}</h2>
            <p>
                {JSON.stringify({nome:'João', idade:30})}
            </p>
        </div>
    )
}