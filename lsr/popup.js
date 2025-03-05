document.getElementById('pauseBtn').addEventListener('click', async () => {
    const input = document.getElementById('extensions').value;
    const ids = input.split(',').map(id => id.trim());
    
    // Sending a message to the background script to pause extensions
    chrome.runtime.sendMessage({ action: 'pauseExtensions', ids: ids });
});
