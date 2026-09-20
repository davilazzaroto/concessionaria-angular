// Define a estrutura de dados (modelo) utilizada pelos veículos no catálogo
export interface Veiculo {
  marca: string;
  modelo: string;
  preco: number;
  combustivel: string;
  imagem: string;
  disponivel: boolean;
}
