function showSection(sectionId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function goToProject(projectId) {
    showSection('projects');
    setTimeout(() => {
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.style.border = "2px solid #3498db";
        }
    }, 100);
}