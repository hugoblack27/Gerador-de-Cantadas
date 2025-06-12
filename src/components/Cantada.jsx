import { useState } from "react"

const Cantadaamorosa = () => {
    const [nome, setNome] = useState("");
    const cantadas = [
        "Você é Wi-Fi? Porque eu sinto uma conexão toda vez que te vejo.",
        "Se beleza fosse tempo, você seria a eternidade.",
        "Você não é GPS, mas me colocou no caminho certo: o seu coração.",
        "Seu pai é padeiro? Porque você é um sonho!",
        "Você é feita de açúcar? Porque adoçou a minha vida.",
        "Se eu fosse um gato, passaria todas as minhas 7 vidas com você.",
        "Você é um cupom de desconto? Porque me deu 100% de vontade de te amar.",
        "Posso te chamar de Google? Porque você tem tudo o que eu procurava.",
        "Você é magia? Porque toda vez que te vejo, meu mundo muda.",
        "Me chama de segunda-feira e vem acabar com a minha paz.",
        "Você é o motivo do meu sorriso bobo todos os dias.",
        "Se eu fosse poeta, só escreveria versos sobre você.",
        "Se amar você fosse crime, eu aceitaria a prisão perpétua.",
        "Você é a razão do meu Ctrl + S: salvei meu coração pra você.",
        "Seu abraço é tipo cobertor em dia frio: essencial.",
        "Você não é rede social, mas já conquistou todos os meus likes.",
        "Se você fosse um livro, seria meu capítulo favorito.",
        "Você é tipo despertador: me tira do sono, mas vale a pena acordar pra te ver.",
        "Coração sem você é tipo Wi-Fi sem sinal: vazio e sem graça.",
        "Me chama de chocolate e me derrete com esse sorriso.",
        "Você é o algoritmo que bagunçou meu sistema operacional.",
        "Meu amor por você é igual boleto: só cresce todo mês.",
        "Você é o carregador do meu celular: sem você, eu fico sem energia.",
        "Me chama de fogueira e vem se aquecer no meu coração.",
        "Se você fosse nota musical, seria a mais afinada do meu coração.",
        "Você é meu bug favorito, porque bagunçou minha rotina de um jeito bom.",
        "Me chama de Netflix e deixa eu ser seu plano perfeito.",
        "Você é luz? Porque iluminou meus dias mais sombrios.",
        "Você é como feriado prolongado: todo mundo espera, todo mundo ama.",
        "Seu nome deveria ser tempo bom, porque só de pensar em você já melhora meu dia.",
        "Se te amar fosse um esporte, eu já teria ganhado várias medalhas.",
        "Você é o sorvete no verão da minha vida.",
        "Você não é sala de aula, mas me ensinou o que é amor de verdade.",
        "Você tem mapa? Porque me perdi no seu olhar.",
        "Eu não sou o cupido, mas fui flechado por você.",
        "Você é o emoji de coração que faltava na minha conversa com a vida.",
        "Me chama de senha forte e me protege com seu carinho.",
        "Você é meu bug de programação favorito: impossível de resolver, mas viciante.",
        "Você é o tempero que faltava na minha vida insossa.",
        "Se você fosse estrela, seria a mais brilhante do meu céu.",
        "Me chama de pizza e vem ser minha combinação perfeita.",
        "Você não é boleto, mas meu coração acelera só de pensar em você.",
        "Você é café? Porque me mantém acordado pensando em você.",
        "Você é minha playlist favorita: toca meu coração toda vez.",
        "Você é tipo update de sistema: chegou pra melhorar tudo.",
        "Se você fosse uma cor, seria minha preferida: amor.",
        "Me chama de mensagem e responde com amor.",
        "Você é a figurinha rara do meu álbum da vida.",
        "Se você fosse um doce, seria brigadeiro: impossível resistir.",
        "Me chama de sorte, porque te encontrei sem querer e agora não quero te perder."
    ]

    // const formCantada = nome + ", " + cantadas[0]
    const[frase, setfrases] = useState("Coloqu o nome do seu crush e veja a magia acontecer💘✨");
    const numFrase = Math.floor(Math.random() * 50)

    const verificanome = () => {
        if (nome == ''){
            setfrases("preencha o nome do seu Crush😍")
        }else{
            setfrases(nome + ", " + cantadas[numFrase])
        }
    }

    return(
        <div className="conteiner">
            <h2 className="titulo">💘 Cantadas amorosas Para o seu Crush 😘</h2>
            <input type="text" placeholder="Nome do seu Crush" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <button onClick={() => verificanome()}>Gerar Cantada</button>
            <p>{frase}</p>
        </div>
    )
}

export default Cantadaamorosa