const maintenanceConfig = {
    enabled: false,
    allowedIPs: ['127.0.0.1'],
    endDate: '2025-06-15T23:59:59',
};

function checkMaintenance() {
    if (maintenanceConfig.enabled) {
        const currentPage = window.location.pathname.split('/').pop();
        
        if (currentPage !== 'maintenance.html') {

            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const userIP = data.ip;
                    if (!maintenanceConfig.allowedIPs.includes(userIP)) {

                        window.location.href = 'maintenance.html';
                    }
                })
                .catch(() => {

                    window.location.href = 'maintenance.html';
                });
        }
    }
}
document.addEventListener('DOMContentLoaded', checkMaintenance);