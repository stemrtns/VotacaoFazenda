// js/api.js
const API_URL = "http://localhost:3000";

async function getParticipantes(naRoca) {
  const res = await fetch(`${API_URL}/participantes?naRoca=${naRoca}`);
  return res.json();
}

async function getVotos() {
  const res = await fetch(`${API_URL}/votos`);
  return res.json();
}

async function registrarVoto(participanteId) {
  const res = await fetch(`${API_URL}/votos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      participanteId: parseInt(participanteId),
      data: new Date().toISOString()
    })
  });
  return res.json();
}

async function zerarVotos() {
  const votos = await getVotos();
  // No JSON Server apagar via DELETE requer deletar 1 a 1
  for (let voto of votos) {
    await fetch(`${API_URL}/votos/${voto.id}`, { method: 'DELETE' });
  }
}