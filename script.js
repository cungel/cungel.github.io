function showSection(sectionId) {
    // Cache toutes les sections
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Affiche la section demandée
    document.getElementById(sectionId).classList.add('active');
}

function goToProject(projectId) {
    // Change d'onglet vers Projets
    showSection('projects');
    
    // Attend un court instant pour que l'affichage se fasse, puis scrolle vers le projet
    setTimeout(() => {
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.style.border = "2px solid #3498db"; // Met en évidence le projet
        }
    }, 100);
}