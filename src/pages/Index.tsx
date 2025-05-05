import ResponseLayout from "@/components/ResponseLayout";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <ResponseLayout title="Resposta Gerada">
        <h2>Exemplo de Conteúdo</h2>
        <p>
          Este é um exemplo de como o layout de resposta funciona. O conteúdo será 
          exibido dentro deste componente com formatação adequada.
        </p>
        <ul>
          <li>Suporta listas</li>
          <li>Formatação de texto</li>
          <li>E outros elementos HTML</li>
        </ul>
        <p>
          Você pode personalizar este layout conforme necessário para atender às suas 
          necessidades específicas de exibição de respostas.
        </p>
      </ResponseLayout>
    </div>
  );
};

export default Index;