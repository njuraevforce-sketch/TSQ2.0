// Utility for updating page texts when language changes
export function updatePageTexts() {
    // This function will be called when language changes
    // It should update all dynamic texts on the page
    
    const t = window.GLYTranslate?.t;
    if (!t) return;
    
    // Update based on current section
    const currentSection = window.glyApp?.currentSection;
    
    switch(currentSection) {
        case 'login':
            updateLoginTexts();
            break;
        case 'register':
            updateRegisterTexts();
            break;
        case 'mine':
            updateMineTexts();
            break;
        case 'home':
            updateHomeTexts();
            break;
        case 'deposit':
            updateDepositTexts();
            break;
        case 'withdraw':
            updateWithdrawTexts();
            break;
        case 'get':
            updateGetTexts();
            break;
        case 'assets':
            updateAssetsTexts();
            break;
        case 'invite':
            updateInviteTexts();
            break;
        case 'team':
            updateTeamTexts();
            break;
        case 'rules':
            updateRulesTexts();
            break;
        case 'company':
            updateCompanyTexts();
            break;
        case 'admin':
            updateAdminTexts();
            break;
    }
}

// Add event listener for language changes
window.addEventListener('languageChanged', () => {
    updatePageTexts();
});

// Individual update functions for each page
function updateLoginTexts() {
    const t = window.GLYTranslate.t;
    // Update login page texts...
}

function updateRegisterTexts() {
    const t = window.GLYTranslate.t;
    // Update register page texts...
}

function updateMineTexts() {
    const t = window.GLYTranslate.t;
    // Update mine page texts...
}

// ... and so on for each page
