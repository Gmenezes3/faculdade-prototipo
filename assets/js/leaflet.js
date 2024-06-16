// Inicializa o mapa
var map = L.map('map').setView([-22.9068, -43.1729], 13);  // Coordenadas para o Rio de Janeiro

// Adiciona a camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Função para buscar coordenadas pelo endereço inserido
async function getCoordinates(address) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}, Rio de Janeiro, Brazil`);
        if (response.data.length > 0) {
            return response.data[0];
        } else {
            alert('Endereço não encontrado');
            return null;
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao buscar o endereço');
        return null;
    }
}

// Função para buscar estacionamentos próximos
async function getParkingLots(lat, lon) {
    const overpassQuery = `
          [out:json];
          node
            ["amenity"="parking"]
            (around:1000, ${lat}, ${lon});
          out body;
      `;
    try {
        const response = await axios.post('https://overpass-api.de/api/interpreter', overpassQuery, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        // Limita os resultados a 5
        return response.data.elements.slice(0, 5);
    } catch (error) {
        console.error(error);
        alert('Erro ao buscar estacionamentos');
        return [];
    }
}

// Evento de clique no botão de busca
document.getElementById('searchButton').addEventListener('click', async () => {
    const address = document.getElementById('addressInput').value.trim();
    if (address.length > 0) {
        const location = await getCoordinates(address);
        if (location) {
            const { lat, lon } = location;
            map.setView([lat, lon], 15);
            const parkingLots = await getParkingLots(lat, lon);
            clearMapMarkers();
            parkingLots.forEach(lot => {
                L.marker([lot.lat, lot.lon]).addTo(map)
                    .bindPopup('Estacionamento');
            });
        }
    } else {
        alert('Por favor, digite um endereço');
    }
});

// Função para limpar todas as marcações do mapa
function clearMapMarkers() {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
}