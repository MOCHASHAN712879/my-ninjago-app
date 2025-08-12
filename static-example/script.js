// Main JavaScript - No backend API calls needed!

// Load characters when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCharacters();
});

// Load and display characters
function loadCharacters() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    characters.forEach(character => {
        const characterCard = createCharacterCard(character);
        gallery.appendChild(characterCard);
    });
}

// Create character card element
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = `character-card ${character.element.toLowerCase()}`;
    card.onclick = () => openCharacterModal(character);
    
    card.innerHTML = `
        <h3>${character.name}</h3>
        <div class="element">${character.emoji} ${character.element}</div>
        <div class="weapon">🗡️ ${character.weapon}</div>
        <div class="power-level">Power Level: ${character.powerLevel}</div>
    `;
    
    return card;
}

// Open character modal
function openCharacterModal(character) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2 style="color: ${character.color}; margin-bottom: 20px;">
            ${character.emoji} ${character.name}
        </h2>
        <div style="margin-bottom: 15px;">
            <strong>Element:</strong> ${character.element}
        </div>
        <div style="margin-bottom: 15px;">
            <strong>Weapon:</strong> ${character.weapon}
        </div>
        <div style="margin-bottom: 15px;">
            <strong>Power Level:</strong> ${character.powerLevel}/100
        </div>
        <div style="margin-bottom: 20px;">
            <div style="background: rgba(255,255,255,0.1); border-radius: 10px; height: 10px; overflow: hidden;">
                <div style="background: ${character.color}; height: 100%; width: ${character.powerLevel}%; transition: width 1s;"></div>
            </div>
        </div>
        <p style="color: #ccc; line-height: 1.6;">${character.description}</p>
    `;
    
    modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Show quests page
function showQuests() {
    document.getElementById('gallery').classList.add('hidden');
    document.getElementById('quests').classList.remove('hidden');
    loadQuests();
}

// Show gallery page
function showGallery() {
    document.getElementById('quests').classList.add('hidden');
    document.getElementById('gallery').classList.remove('hidden');
}

// Load and display quests
function loadQuests() {
    const questsGrid = document.getElementById('quests-grid');
    questsGrid.innerHTML = '';
    
    quests.forEach(quest => {
        const questCard = createQuestCard(quest);
        questsGrid.appendChild(questCard);
    });
}

// Create quest card element
function createQuestCard(quest) {
    const card = document.createElement('div');
    card.className = `quest-card ${quest.element.toLowerCase()}`;
    
    const difficultyClass = `difficulty-${quest.difficulty.toLowerCase()}`;
    
    card.innerHTML = `
        <div class="quest-title">Season ${quest.season}: ${quest.title}</div>
        <div class="quest-description">${quest.description}</div>
        <div class="quest-info">
            <div>
                <span class="quest-difficulty ${difficultyClass}">${quest.difficulty}</span>
            </div>
            <div style="color: #ffd700;">
                ${quest.status.replace('_', ' ')}
            </div>
        </div>
    `;
    
    return card;
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});