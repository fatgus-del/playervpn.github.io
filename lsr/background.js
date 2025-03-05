chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === 'pauseExtensions') {
        const ids = message.ids;

        ids.forEach(async (id) => {
            await pauseExtension(id);

            // Wait for 20 minutes before resuming the extension
            setTimeout(async () => {
                await resumeExtension(id);
            }, 1200000);  // 1200000 milliseconds = 20 minutes
        });
    }
});

// Function to pause an extension
function pauseExtension(id) {
    return new Promise((resolve) => {
        chrome.management.setEnabled(id, false, () => {
            console.log(`Paused extension ${id}`);
            resolve();
        });
    });
}

// Function to resume an extension
function resumeExtension(id) {
    return new Promise((resolve) => {
        chrome.management.setEnabled(id, true, () => {
            console.log(`Resumed extension ${id}`);
            resolve();
        });
    });
}
