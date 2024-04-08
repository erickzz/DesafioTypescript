import Image from 'next/image';

type Produto = {
  id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
  createdAt: Date;
};

async function fetchProdutos() {
  const fetchProdutos = await fetch('http://localhost:3000/products', {
    cache: 'no-store',
  });
  const produtos: Produto[] = await fetchProdutos.json();
  return produtos;
}

export default async function Home() {
  const produtos: Produto[] = await fetchProdutos();
  return (
    <main className="h-screen w-screen">
      <div
        className="w-screen h-12 flex items-center"
        style={{ backgroundColor: '#510083' }}
      >
        <h1 className="text-2xl font-bold text-white px-4">Produtos</h1>
      </div>
      <div className="flex mt-8">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="border-2 border-zinc-500 rounded m-4 w-44 items-center justify-center flex flex-col p-4"
          >
            <Image
              src={produto.image}
              alt={produto.name}
              width={180}
              height={180}
            />
            <p className="text-sm">{produto.name}</p>
            <p className="text-xs">{produto.brand}</p>
            <p className="text-lg font-bold">R$ {produto.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
