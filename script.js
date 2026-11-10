const API_URL = 'http://localhost:3000';

async function getParticipantes(naRoca = null) {
  let url = `${API_URL}/participantes`;
  if (naRoca !== null) {
    url += `?naRoca=${naRoca}`;
  }
  const response = await fetch(url);
  return await response.json();
}

async function getVotos() {
  const response = await fetch(`${API_URL}/votos`);
  return await response.json();
}

async function registrarVoto(participanteId) {
  const voto = {
    participanteId: parseInt(participanteId),
    data: new Date().toISOString()
  };
  const response = await fetch(`${API_URL}/votos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(voto)
  });
  return await response.json();
}

async function zerarVotos() {
  const votos = await getVotos();
  for (let voto of votos) {
    await fetch(`${API_URL}/votos/${voto.id}`, {
      method: 'DELETE'
    });
  }
}