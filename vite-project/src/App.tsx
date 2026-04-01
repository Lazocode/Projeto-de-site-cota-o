import { Meucomponente } from "./components/Api.tsx";
import { Title } from "./components/header.tsx";

// Componente principal do aplicativo
export default function App() {
  return (
    <div>
      <Title title="CotaJá" subtitle="Veja as cotações atuais das principais moedas" />
      <Meucomponente />
    </div>
  )
}
