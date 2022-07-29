function main(input) {
    let inventory = input[0].split(' ');
    input.shift();

    for (let i = 0; i < input.length; i++) {
        let currentValues = input[i].split(" ");
        let currentCommand = currentValues.shift();

        switch (currentCommand) {
            case "Buy":
                if (!inventory.includes(currentValues)) {
                    inventory.push(currentValues);
                }
                break;
            case "Trash":
                if (inventory.includes(currentValues)) {
                    let index = inventory.indexOf(currentValues);
                    inventory.splice(index, 1);
                }
                break;
            case "Repair":
                if (inventory.includes(currentValues)) {
                    let index = inventory.indexOf(currentValues);
                    let repaired = inventory.splice(index, 1);
                    inventory.push(repaired);
                }
                break;
            case "Upgrade":
                let upgradeElement = currentValues.toString().split('-');
                if (inventory.includes(upgradeElement[0])) {
                    let index = inventory.indexOf(upgradeElement[0]);
                    inventory.splice(index + 1, 0, `${upgradeElement[0]}:${upgradeElement[1]}`);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}
main(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])