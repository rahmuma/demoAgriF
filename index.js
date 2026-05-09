//farmingGuide
function applyFilters() {
    let type = document.getElementById('typeFilter').value;
    let season = document.getElementById('seasonFilter').value;
    let method = document.getElementById('methodFilter').value;

    document.querySelectorAll('.guide').forEach(el => {
        let matchType = (type === 'all' || el.classList.contains(type));
        let matchSeason = (season === 'all' || el.classList.contains(season));
        let matchMethod = (method === 'all' || el.classList.contains(method));

        el.style.display = (matchType && matchSeason && matchMethod) ? 'block' : 'none';
    });
}

// cropCatagory

function showCategory(category) {
    document.querySelectorAll('.crop').forEach(el => {
        el.style.display = el.classList.contains(category) ? 'block' : 'none';
    });

    document.querySelectorAll('#cropTabs .nav-link').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}