const fs = require('fs');

const content = fs.readFileSync('d:/gameee/serbia/game.js', 'utf8');
const match = content.match(/const storyData = ({[\s\S]+?});/);

if (!match) {
    console.error("Could not find storyData");
    process.exit(1);
}

// Simple evaluation to get the object
const storyData = eval('(' + match[1] + ')');
const keys = Object.keys(storyData);
const errors = [];
const mentionedKeys = new Set(['start']);

keys.forEach(key => {
    const scene = storyData[key];
    scene.choices.forEach(choice => {
        mentionedKeys.add(choice.next);
        if (!storyData[choice.next]) {
            errors.push(`Scene "${key}" has a choice leading to non-existent state "${choice.next}"`);
        }
    });
});

keys.forEach(key => {
    if (!mentionedKeys.has(key)) {
        console.log(`Warning: Scene "${key}" is unreachable.`);
    }
});

if (errors.length === 0) {
    console.log("No broken links found in storyData.");
} else {
    console.error("Found errors:");
    errors.forEach(e => console.error(e));
}
