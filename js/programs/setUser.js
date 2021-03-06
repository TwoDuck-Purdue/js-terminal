(function() {
    if (!stdin()) {
        stderr("No username provided.");
        return;
    }
    const args = stdin().split("\n");
    if (args.length === 0) {
        newLine("Please include a username and try again.");
    } else if (args.length !== 1) {
        newLine("Please include just a username and try again.");
    } else {
        const newName = args[0];
        username = newName;
        localStorage.setItem("username", newName);
        updatePrefix();
    }
}());