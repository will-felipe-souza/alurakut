import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if(request.method === 'POST') {
    const TOKEN = 'b2506bab9aa328a1d1dbc3b7aea04e';
    const client = new SiteClient(TOKEN);
  
    const registroCriado = await client.item.create({
      itemType: "976136", // ID do Model de "Communities" criado pelo Dato
      ...request.body,
      // title: request.body.title,
      // imageUrl: request.body.imageUrl,
      // creatorSlug: request.body.creatorSlug
    })
    
    response.json({
      registroCriado: registroCriado,
    })
    
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!"
  });
}