function getLogo() {
    return new Promise(function(resolve, reject) {
        fetch('api/logo')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Failed to fetch logo');
                }
                return response.json();
            })
            .then(function(data) {
                resolve(data.logoUrl);
            })
            .catch(function(error) {
                reject(error);
            });
    });
}

function updateLogo() {
    var logoContainer = document.getElementById('logoContainer');
    logoContainer.classList.add('loading');

    getLogo()
        .then(function(logoUrl) {
            var logo = document.getElementById('logo');
            logo.src = logoUrl;
        })
        .catch(function(error) {
            console.error(error);
        })
        .finally(function() {
            logoContainer.classList.remove('loading');
        });
}

updateLogo();
