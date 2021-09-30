export default function lista2() {
  function gerarLista() {
    let lista = [];
    for (let i = 0; i <= 10; i++) {
      lista.push(<span>{i},</span>,)
    }
    return lista
  }
  return (
    <div>
      {gerarLista()}
    </div>
  )
}